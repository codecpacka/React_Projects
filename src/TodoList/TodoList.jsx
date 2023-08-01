import { Fragment, useState } from "react"
import "./TodoList.css"
export default function TodoList() {
    let [todoList, setTodoList] = useState([])
    let [todoText, setTodoText] = useState("")
    console.log(todoText)

    function addToTodos() {
        setTodoList((todoList) => {
            return [
                ...todoList,
                { title: todoText, completed: false, id: crypto.randomUUID() },
            ]
        })
    }

    function deleteTodo(id, todoList) {
        setTodoList(() => {
            return todoList.filter((todo) => todo.id !== id)
        })
    }

    function checkReverse(id, completed) {
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
                        <Fragment key={todo.id}>
                            <li className="list-item">
                                <label className="list-item-label">
                                    <input
                                        type="checkbox"
                                        data-list-item-checkbox
                                        checked={todo.completed}
                                        onChange={(e) => {
                                            checkReverse(todo.id, e.target.checked)
                                        }}
                                    />
                                    <span data-list-item-text>{todo.title}</span>
                                </label>
                                <button
                                    data-button-delete
                                    onClick={() => {
                                        deleteTodo(todo.id, todoList)
                                    }}>
                                    Delete
                                </button>
                            </li>
                        </Fragment>
                    )
                })}
            </ul>

            <div id="new-todo-form">
                <label htmlFor="todo-input">New Todo</label>
                <input
                    type="text"
                    id="todo-input"
                    onChange={(e) => {
                        setTodoText(() => e.target.value)
                    }}
                />
                <button onClick={addToTodos}>Add Todo</button>
            </div>
        </>
    )
}
