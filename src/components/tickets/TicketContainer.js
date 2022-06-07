import {useState} from "react"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"

/* Parent component TicketContainer that will maintain the state of TicketSearch 
Set up state variable, function
Returning Child components are: TicketSearch (input field) and TicketList
React takes all props and brings it together into a single object with a key of setterFunction
KEY: setterFunction is before the = -> TicketSearch module, setSearchTerms is the property
*/

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("") //no search terms by default, which is why we need ""

    return <>
        <TicketSearch setterFunction={setSearchTerms} />
		<TicketList searchTermState={searchTerms} />
    </>
}