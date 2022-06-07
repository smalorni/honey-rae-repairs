
/* This is for the search bar. Note: if you put inside of div, it will separate from buttons */
export const TicketSearch = ({ setterFunction }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Enter search terms" />
        </div>
    )
}