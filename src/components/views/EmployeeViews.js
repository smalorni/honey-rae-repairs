import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeDetails } from "../Employees/EmployeeDetails"
import { EmployeeList } from "../Employees/EmployeeList"
import { TicketContainer } from "../tickets/TicketContainer"

/* Added employees route */
export const EmployeeViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="title--main">Honey Rae Repairs</h1>
					<div>Your one-stop shop for repairing your tech</div>

					<Outlet />
				</>
			}>
				<Route path="tickets" element={ <TicketContainer/>} />
				<Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
				<Route path="employees" element={ <EmployeeList /> } />
			</Route>
		</Routes>
	)
}

