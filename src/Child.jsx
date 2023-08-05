import { useState } from "react"

export function Child({ data, changeName }) {

    return (
        <>
            {data}
            <button onClick={() => {
                changeName("piggy")
            }}>click me to change</button>
        </>
    )
}
export default Child