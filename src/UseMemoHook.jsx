import { useState, useMemo } from "react"

export default function UseMemoHook() {
    let [query, setQuery] = useState("")
    const [isDark, setIsDark] = useState(false)


    return (
        <>
            <div style={{
                background: isDark ? "black" : "white",
                color: isDark ? "white" : "black"
            }}>

                <label htmlFor="">Name</label>
                <input type="text" value={query} onChange={(e) => {
                    setQuery(e.target.value)
                }} /> <br />
                <button onClick={() => {
                    setIsDark((d) => !d)
                }}>toogle mode</button>
            </div >
        </>

    )

}

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

}