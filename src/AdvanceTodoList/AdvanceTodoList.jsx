import { Fragment, useState, useMemo } from "react"
import "./style.css"
import { TodoItem } from "./TodoItem"
import { useLocalStorage } from "./useLocalStorage"
import { set } from "react-hook-form"

export default function AdvanceTodoList() {
    const initialvalue = [
        { id: crypto.randomUUID(), name: "item6", completed: false, editable: false },
        { id: crypto.randomUUID(), name: "item2", completed: false, editable: false }
    ]
    const [arr, setLocalArray] = useLocalStorage("todos", initialvalue)
    const [hide, setHide] = useLocalStorage("hide", false)
    const [newTodo, setNewTodo] = useState("")
    const [filterValue, setFilterValue] = useState("")


    function toggleTodo(id, newCheckStatus) {
        console.log(id, newCheckStatus);
        setLocalArray((arr) => {
            return arr.map((item) => {
                if (item.id != id) {
                    return item
                }
                item.completed = newCheckStatus
                return item
            })
        })
    }
    function deleteTodo(id) {
        setLocalArray((arr) => {
            return arr.filter((item) => item.id != id)
        })
    }
    function onSubmit(e) {
        e.preventDefault()
        setLocalArray([...arr, { id: crypto.randomUUID(), name: newTodo, completed: false }])
    }


    let filteredValues = useMemo(() => {
        return arr.filter((item) => {
            if (hide) {
                if (item.completed) return false
            }
            return item?.name.match(`${filterValue}`)
        })
    }, [arr, filterValue, hide])

    function setEditable(id) {
        setLocalArray((arr) => {

            return arr.map((ele) => {
                if (ele.id == id) {
                    ele.editable = true
                }
                return ele
            })
        })
    }
    function modify(id, value) {
        setLocalArray((arr) => {
            return arr.map((ele) => {
                if (ele.id == id) {
                    return { ...ele, name: value, editable: !ele.editable }
                }
                return ele
            })
        })
    }
    return (<>

        <div className="filter-form">
            <div className="filter-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={filterValue} onChange={(e) => {

                    setFilterValue(e.target.value)
                }} />
            </div>
            <label>
                <input type="checkbox" checked={hide} onChange={() => {
                    setHide(!hide)
                }} />
                Hide Completed
            </label>
        </div>
        <ul id="list">

            {

                filteredValues.map((list) => {
                    return <TodoItem key={list.id} {...list} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditable={setEditable} editable={list.editable} modify={modify} />


                })
            }

        </ul>
        <form id="new-todo-form" onSubmit={onSubmit}>
            <label htmlFor="todo-input">New Todo</label>
            <input type="text" id="todo-input" value={newTodo} onChange={(e) => {
                setNewTodo(e.target.value)
            }} />
            <button>Add Todo</button>
        </form>
    </>)
}