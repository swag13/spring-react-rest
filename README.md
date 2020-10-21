# spring-react-rest
Spring Application with Spring Rest and React with H2

# about npm modules
Create npm_modules if npm install is not creating the dir

### Rest Controller for Reference
/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.swag.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/")
public class HomeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@RequestMapping(value = "/")
	public String index() {
		return "index"; 
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("employees")
	public Iterable<Employee> getEmployees() {
		return this.employeeRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("employees/{id}")
	public ResponseEntity<Iterable<Employee>> updateEmployee(@PathVariable long id, @RequestBody Iterable<Employee> employee) {
		System.out.println(employee.toString());
		for (Employee emp : employee) {
			Employee employeeUpdated = employeeRepository.save(emp);
		}
		return new ResponseEntity<Iterable<Employee>>(employee, HttpStatus.OK);
	}
}



