import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList"
import { TicketForm } from "../tickets/ticketForm"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="title--main">Honey Rae Repairs</h1>
					<div>Your one-stop shop for repairing your tech</div>

					<Outlet />
				</>
			}>
				<Route path="tickets" element={ <TicketList /> } />
				<Route path="ticket/create" element={ <TicketForm /> } />
			</Route>
		</Routes>
	)
}
