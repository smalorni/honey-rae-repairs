import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./tickets.css" //import css file

export const TicketList = () => {
    /* Tickets has a value of empty array, setTickets has a value of a function - initial change of state. The purpose of function (setTickets) is to change the state to the entire array of service tickets from API */
    const [tickets, setTickets] = useState([]) //initial value is empty array

    /* Don't want to modify array of tickets from API so created another set of variable names, depends if customer or employee */
    const [filteredTickets, setFiltered] = useState([])
    /* want to toggle "setEmergency" to true */
    const [emergency, setEmergency] = useState(false) //by default, it will show only emergency tickets
    const [openOnly, updateOpenOnly] = useState(false)//Open ticket function
    const navigate = useNavigate() //navigation hook 
    

    /* Steps:
    1. To get user honey obj of local storage */
    const localHoneyUser = localStorage.getItem("honey_user")
    /* 2. Currently a string so need to convert to an obj */
    const honeyUserObject = JSON.parse(localHoneyUser)

/* useEffect can be in any order */

/* When user click on button, changes state, shows any "emergency" tickets if it states "true" */
    useEffect(
        () => {
            if(emergency) {
                const emergencyTickets = tickets.filter(ticket => ticket.emergency === true)
                setFiltered(emergencyTickets)
            } else {
                setFiltered(tickets) //original array if false
            }
        },
        [emergency]
        )

    //Method: observe state and runs instructions when state changes
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets")
            .then(response => response.json())
            .then((ticketArray) => { //parameter is ticketArray
                setTickets(ticketArray) //passes what you want the new value to be
            })
            console.log("Initial state of tickets", tickets) //view the initial state of tickets
        },
        [] //when this array is empty, you are observing initial component state

    )

    /* When data returns, when ticket state changes, need to determine whether to show all tickets or subset of tickets which means you need to observe the state */

    useEffect(
        () => {
            if(honeyUserObject.staff) { //true or false
                setFiltered(tickets)//for employees
            } else {
                const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)//for customers, (came from API and dev tools, id property)
                setFiltered(myTickets)
            }
        }, 
        [tickets] /* Originally, the empty array was initial state, but now it was updated to tickets state which is why we are using this inside of [] for second useEffect */
    )
    useEffect (
        () => {
            if(openOnly) {
            const openTicketArray = tickets.filter(ticket => {
                //filter tickets for the user and for the date that are not empty strings in API
                return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
            })
            setFiltered(openTicketArray)
        } else {
            const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
            setFiltered(myTickets)
            }
        },
        [openOnly] //from above
    )
    /* JSX is displaying state/elements - you need this section below in order for the info to appear on the UI in browser */
    
    return <>
    {
        /* If that is true, the button will appear if logged in as staff. You can use ternary statement to render which component is being rendered or any state changed */
        honeyUserObject.staff
        ? <>
            <button onClick={ () => setEmergency(true)}>Show Emergency Tickets</button>
            <button onClick={ () => setEmergency(false)}>Show All Tickets</button>
        </> //customer side: 
        : 
        <>
            <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
            <button onClick={() => updateOpenOnly(true)}>Open Ticket</button>
            <button onClick={() => updateOpenOnly(false)}>All My Tickets</button>

        </>
    }
    
    <h2>List of Tickets</h2>
        <article className="tickets">
            {
                //no longer need $ sign in react
                filteredTickets.map 
                ((filteredTicket) => {
                    //"ticket" is the object of the array
                    //purpose of return here is to return the HTML representation of ticket
                    return <section className="ticket">
                        <header>{filteredTicket.description}</header>
                        <footer>Emergency: {filteredTicket.emergency ? "🧨": "No"}</footer>
                    </section>
                }
            )
        }
        </article>
    </>
}

