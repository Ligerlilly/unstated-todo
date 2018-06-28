import * as React from 'react'
import {
    Subscribe,
    Container
} from 'unstated'
import TodoView from './todo_view'

class TodoListContainer extends Container {
    state = {
        todos: [{title: "hi"}],
    };

    addTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    unfinishTodoCount =  this.todos.filter(todo => !todo.finished).length
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
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
                        <ul style={{ listStyle: "none" }}>{todoList.state.todos.map(todo => <TodoView todo={todo}/> )}</ul>
                        <input type="text" onChange={this.onChange} />
                        <button style={{ marginLeft: 10 }} onClick={() => todoList.addTodo(this.state.todo)}>submit</button>
                    </div>
                )}
            </Subscribe>
        )
    }
}

export default TodoList