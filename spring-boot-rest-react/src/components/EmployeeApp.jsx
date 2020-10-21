import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeeComponent from './EmployeeComponent';

class EmployeeApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Employee Application</h1>
                    <Switch>
                        <Route path="/employees" exact component={EmployeeComponent} />
                        <Route path="/employees/:id" component={EmployeeComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default EmployeeApp