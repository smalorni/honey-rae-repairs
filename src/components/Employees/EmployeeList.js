/* Goal: need to fetch existing data from API to compile a list of employees, starting with users (staff only), then employees. Type in http://localhost:8088/users?isStaff=true in browser to gather staff users */

import { Employee } from "./Employees"
import { useEffect, useState } from "react"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    //All needs to be inside this function

useEffect (
    () => {
        fetch(`http://localhost:8088/users?isStaff=true`)
        .then(response => response.json())
        .then((employeeArray) => {
            setEmployees(employeeArray)
        })
    },
    [] //set up original array, with initial value of empty array
)

/* Set up JSX, we moved it to Employees.js.
Error message: Each child in a list should have a unique "key" prop - must add unique key that is rendering the information */

    return <article className="employees">
        {
            employees.map(employee => <Employee key={`employee--${employee.id}`} 
                id={employee.id} 
                fullName={employee.fullName} 
                email={employee.email} />)
            
        }
</article>
    
}