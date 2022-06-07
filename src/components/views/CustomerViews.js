import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerDetails } from "../Customers/CustomerDetails"
import { CustomerList } from "../Customers/CustomerList"
import { TicketForm } from "../tickets/ticketForm"
import { TicketList } from "../tickets/TicketList"

export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="title--main">Honey Rae Repairs</h1>
					<div>Your one-stop shop for repairing your tech</div>

					<Outlet />
				</>
			}>
				<Route path="tickets" element={ <TicketList/>} />
				<Route path="ticket/create" element={ <TicketForm /> } />
				<Route path="customers" element={ <CustomerList /> } />
				<Route path="customers/:customerId" element={ <CustomerDetails /> } />
			</Route>
		</Routes>
	)
}

