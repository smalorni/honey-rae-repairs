/* This takes from EmployeeViews module - <Route path="employees/:employeeId"*/
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const EmployeeDetails = () => {
    //Deconstruct employee ID variable and the route itself
    const { employeeId } = useParams()
    const [employee, updateEmployee] = useState() //state set up

    useEffect (
        () => {
            fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
                .then (response => response.json())
                .then((data) => {
                    const singleEmployee = data[0]
                    updateEmployee(singleEmployee)

                })
        },
        [employeeId]
    )

    return <section className="employee">
        <header className="employee_header">{employee?.user?.fullName}</header>
            <div>Email: {employee?.user?.email}</div>
            <div>Specialty: {employee?.specialty}</div>
            <div>Rate: {employee?.rate}</div>
        <footer className="employee_footer">Currently Working On {employee?.employeeTickets?.length} tickets</footer>
    
    </section>
}