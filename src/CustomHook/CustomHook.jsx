import { useState } from "react"

function CustomHook() {


    const [isRed, toggleRed] = useToggle(false)

    const containerStyle = {
        color: isRed ? "red" : "green"
    }

    return (<>


        <div className="container" style={containerStyle}>
            <h1>
                i am red
            </h1>
            <button onClick={toggleRed}>toogle color</button>
        </div>


    </>)
}
function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)
    function toogle() {
        setValue(!value)
    }
    return [value, toogle]

}

export default CustomHook