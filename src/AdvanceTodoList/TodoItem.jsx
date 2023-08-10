import { useEffect, useRef } from "react"

export function TodoItem({ id, name, completed, editable, toggleTodo, deleteTodo, setEditable, modify }) {
    const nameRef = useRef()
    console.log(nameRef);
    const inpuRef = useRef()
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {editable ? <span> <input type="text" ref={inpuRef} name="" id="" defaultValue="" /><button onClick={(e) => {
                    console.log(inpuRef.current.value);
                    modify(id, inpuRef.current.value)
                }}>save</button> </span> : <span data-list-item-text >{name}</span>}

            </label>
            <button onClick={() => setEditable(id)}>edit</button>
            <button onClick={() => deleteTodo(id)} data-button-delete>
                Delete
            </button>
        </li >
    )
}
