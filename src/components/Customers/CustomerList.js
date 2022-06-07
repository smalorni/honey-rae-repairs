/* Create a CustomerList module that contains a component function that fetches all customers and iterates the array in the JSX to display the name of each customer by passing each object to the Customer component as a prop. */

import { Customer } from "./Customers"
import { useEffect, useState } from "react"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
            .then(response => response.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        [] //set up original array, with initial value of empty array
    )

//JSX Section
    return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer--${customer.id}`} 
                id={customer.user.id} 
                fullName={customer.user.fullName}
                email={customer.user.email}
                address={customer.address}
                phoneNumber={customer.phoneNumber} />)
            
        }
</article>
    
}