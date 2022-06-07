import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TicketForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [ticket, update] = useState({
        description: "",
        emergency: false

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate =useNavigate() //use that below in the fetch

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    const handleSaveButtonClick = (event) => { //this is function that stores data when submit ticket is clicked. You need to create an onclick below for it
        event.preventDefault()
        //console.log("You clicked the button") - message shows up in console log when button clicked

        // TODO: Create the object to be saved to the API
/*  Info came from API: 
{
        "id": 4,
        "userId": 2,
        "description": "A deleniti est sed vel. Dolores aliquid enim vero. Quia eligendi vel voluptas. Nihil nihil quasi ullam officia doloremque amet non. Officia atque quae.",
        "emergency": false,
        "dateCompleted": ""
      }, 
*/  
      const ticketToSendToApi = {
          //look at application in dev tools, you will see key as "honey_user" with value
          userId: honeyUserObject.id,
          description: ticket.description,
          emergency: ticket.emergency,
          dateCompleted: ""
      }

        // TODO: Perform the fetch() to POST the object to the API

        /* POST request to JSON server, asking to save data, when you are done, then navigate user back to ticket list - route found in applicationViews.js*/

        return fetch('http://localhost:8088/serviceTickets', {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(ticketToSendToApi)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/tickets") //came from application view route
        })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description}
                        onChange={
                            (evt) => {
                                const copy = {...ticket} //created a copy of existing state
                                    copy.description = evt.target.value //to modify
                                    update(copy) //invoked function to update the state, will pass copy back to be the new state
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={ticket.emergency}
                        onChange={
                            (evt) => {
                                const copy = {...ticket} //created a copy of existing state
                                    copy.emergency = evt.target.checked //value does not work with checkboxes
                                    update(copy) //invoked function to update the state, will pass copy to be the new state
                            }
                        } />
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}