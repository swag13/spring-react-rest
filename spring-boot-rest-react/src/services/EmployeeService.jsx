import axios from 'axios';

const API_URL = 'http://localhost:8080'
const GET_REST_API_URL = `${API_URL}/api/employees`;


class EmployeeService {
    getEmployees(){
        return axios.get(GET_REST_API_URL);
    }

    updateEmployees(id, employee) {
            console.log('executed service')
            return axios.put(`${API_URL}/api/employees/${id}`, employee);
        }
}

export default new EmployeeService()