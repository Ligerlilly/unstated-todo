import * as React from "react"

const TodoView = ({ todo, toggleFinished }) => (
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => toggleFinished()}
        />{todo.title}
    </li>
)

export default TodoView