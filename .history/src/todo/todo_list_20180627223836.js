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

    onChange(event) {
        this.setState({ todo: { ...this.state.todo, title: event.target.value } })
    }

    render() {
        return (
            <Subscribe to={[TodoListContainer]}>
                {todoList => (
                    <div>
                        <div>{todoList.state.todos.map(todo => <div>{todo.title}</div>)}</div>
                        <input type="text" onChange={this.onChange} />
                        <button style={{ marginLeft: 10 }} onClick={() => todoList.addTodo(this.state.todo)}>submit</button>
                    </div>
                )}
            </Subscribe>
        )
    }
}

export default TodoList