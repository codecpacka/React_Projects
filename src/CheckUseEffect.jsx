import { useEffect } from "react"
import { useState } from "react"

export default function CheckUseEffect() {
    let [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
        console.log(count);
    }, [count])
    return (
        <>
            <button onClick={() => setCount(1 + count)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>

        </>
    )
}