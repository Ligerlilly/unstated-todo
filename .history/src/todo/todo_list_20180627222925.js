import * as React from 'react'
import {
    Subscribe,
    Container
} from 'unstated'

class TodoListContainer extends Container {
    state = {
        todos: [{title: "hi"}],
    };

    addTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: {
                title: "",
                finished: false,
            }
        }
    }

    onChanfe

    render() {
        return (
            <Subscribe to={[TodoListContainer]}>
                {todoList => (
                    <div>
                        <div>{todoList.state.todos.map(todo => <div>{todo.title}</div>)}</div>
                    </div>
                )}
            </Subscribe>
        )
    }
}

export default TodoList