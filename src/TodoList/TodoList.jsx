import { useState } from "react"
import "./TodoList.css"
import { TodoItem } from "./TodoItem"
export default function TodoList() {
    let [todoList, setTodoList] = useState([]) // todo list array initialized to empty array
    let [todoText, setTodoText] = useState("")//state to caputer todo value/title 
    console.log(todoText)

    function addToTodos() {       //to add value to todoList Array
        if (todoText == "") return
        setTodoList((todoList) => {
            return [
                ...todoList,
                { title: todoText, completed: false, id: crypto.randomUUID() },
            ]
        })
    }

    function deleteTodo(id) { //to delete an element with the given id
        setTodoList(() => {
            return todoList.filter((todo) => todo.id !== id)
        })
    }

    function checkReverse(id, completed) { // to set the current checked state after checked is clicked
        setTodoList(() => {
            return todoList.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }
    return (
        <>
            {console.log(JSON.stringify(todoList))}
            <ul id="list">
                {todoList?.map((todo) => {
                    return (
                        <TodoItem key={crypto.randomUUID()} {...todo} deleteTodo={deleteTodo} checkReverse={checkReverse} /> // renduring todoItems child by passing different props and helder functions
                    )
                })}
            </ul>

            <form id="new-todo-form">
                <label htmlFor="todo-input">New Todo</label>
                <input
                    type="text"
                    id="todo-input"
                    onChange={(e) => {
                        setTodoText(() => e.target.value)
                    }}
                />
                <button onClick={addToTodos}>Add Todo</button>
            </form>
        </>
    )
}
