/* Create a CustomerDetails component that should display the full name, email, phone number, and address of the customer when the customer's name is clicked in the list view. */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    //Deconstruct customer ID variable and the route itself
    const { customerId } = useParams()
    const [customer, updateCustomer] = useState() 

    useEffect (
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&_embed=customerTickets&userId=${customerId}`)
                .then (response => response.json())
                .then((data) => {
                    const singleCustomer = data[0]
                    updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    //JSX Section

    return <section className="customer">
        <header className="customer_header">{customer?.user?.fullName}</header>
            <div>Email: {customer?.user?.email}</div>
            <div>Address: {customer?.address}</div>
            <div>Phone Number: {customer?.phoneNumber}</div>
    </section>

}