import { Repairs } from "./components/Repairs"
import { createRoot } from "react-dom/client" //this will always remain the same
import "./index.css"
import { BrowserRouter } from "react-router-dom"//this will always remain the same

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Repairs />
    </BrowserRouter>
)

