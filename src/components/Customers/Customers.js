/* Create a Customer module that contains a component function that accepts a single customer object as a prop. It should display the customer name, address, and phone number. */

import { Link } from "react-router-dom"

/* Deconstruct the property */
export const Customer = ({ id, fullName, address, phoneNumber }) => {
    return <section className="customer">
                <div>
                    <Link to={`/customers/${id}`}>Name: {fullName}</Link>
                </div>
                <div>Address: {address}</div>
                <div>Phone Number: {phoneNumber}</div>

            </section>
}