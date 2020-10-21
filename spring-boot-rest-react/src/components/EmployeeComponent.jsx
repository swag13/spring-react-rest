import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

class EmployeeComponent extends React.Component {
    history = createHistory(this.props);
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }
        this.updateEmployees = this.updateEmployees.bind(this)
    }
    componentDidMount(){
       this.refreshEmployees();

    }

     updateEmployees(id) {
            console.log('update ' + id)
            this.props.history.push(`/employees/${id}`)

            const employee = [{
                                        "id": 2,
                                        "firstName": "Nick",
                                        "lastName": "Fury",
                                        "description": "Avenger"}]

            EmployeeService.updateEmployees(2, employee).then((response)=> {
                                this.setState({ employees : response.data})
                            });
            this.refreshEmployees()
        }

    refreshEmployees() {
          EmployeeService.getEmployees().then((response)=> {
                    this.setState({ employees : response.data})
                });
    }

    render () {
    console.log('executing render')
        return (
            <div>
                <h1 className = "text-center"> Employees List </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Id </td>
                            <td> First Name </td>
                            <td> Last Name </td>
                            <td> Description </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.description}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateEmployees(employee.id)}>Update</button></td>
                                </tr>
                                )
                        }
                    </tbody>
                 </table>

                 </div>


        )
     }

}

export default EmployeeComponent