import { useContext } from "react"
import { ThemeContext } from "./useContext"
export function GrandChild() {

    const { isDarkMode, toggle } = useContext(ThemeContext)
    return (<>

        <button
            style={{
                color: isDarkMode ? "#333" : "white",
                background: isDarkMode ? "white" : "#333",
                border: "none",
                borderRadius: ".25em"
            }}

            onClick={toggle}>toggle</button>
    </>)
}