import { observer } from 'mobx-react'
import * as React from "react"

const TodoView = observer(({ todo }) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

export default TodoView