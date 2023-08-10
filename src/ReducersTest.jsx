import { useReducer, useState } from "react"
function reducer(count, action) {
    switch (action.type) {
        case "DECREMENT":
            return count - 1;
        case "INCREMENT":
            return count + 1;
        case "RESET":
            return 0;
        case "CHANGE_COUNT":
            return count + action.payload.value;
        default:
            return count
    }

}
export function ReducerTest() {
    let initialCount = 0;
    const [count, dispatch] = useReducer(reducer, initialCount)


    return (<>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
        <button onClick={() => dispatch({ type: "CHANGE_COUNT", payload: { value: 5 } })}>+5</button>

    </>)
}
