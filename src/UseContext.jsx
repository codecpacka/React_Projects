import { useContext, useEffect, useState, createContext } from "react"
import { set } from "react-hook-form"
import Child from "./Child"
export const ThemeContext = createContext()
export function UseContexTest() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    useEffect(() => {
        document.body.style.background = isDarkMode ? "#333" : "white"
        document.body.style.color = isDarkMode ? "white" : "#333"

    }, [isDarkMode])
    function toggle() {
        setIsDarkMode(!isDarkMode)
    }
    return (


        <ThemeContext.Provider value={{ isDarkMode, toggle }}>
            {/* // use Context Hook// */}
            <Child />


            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reiciendis nisi fugiat dolorum aut temporibus hic ducimus corrupti. Sunt, tempora quis? Consequuntur, voluptas!
        </ThemeContext.Provider>
    )
}

export default UseContexTest