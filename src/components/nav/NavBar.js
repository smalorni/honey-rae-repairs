
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"
/* This is where the log out/log in process occurs */

/* Added another nav bar link for employees */
export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

		if(honeyUserObject.staff) {
			//return employee views
			return <EmployeeNav />
		} else {
			//return customer views
			return <CustomerNav />
		}
	
}


