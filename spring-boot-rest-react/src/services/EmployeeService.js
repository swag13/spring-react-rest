import axios from 'axios';

const EMP_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService {
    getEmployees(){
        return axios.get(EMP_REST_API_URL);
    }
}

export default new EmployeeService()