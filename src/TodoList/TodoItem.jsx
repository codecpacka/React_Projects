export function TodoItem({ id, title, completed, deleteTodo, checkReverse }) {
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    type="checkbox"
                    data-list-item-checkbox
                    checked={completed}
                    onChange={(e) => {
                        checkReverse(id, e.target.checked)
                    }}
                />
                <span data-list-item-text>{title}</span>
            </label>
            <button
                data-button-delete
                onClick={() => {
                    deleteTodo(id)
                }}>
                Delete
            </button>
        </li>
    )
}