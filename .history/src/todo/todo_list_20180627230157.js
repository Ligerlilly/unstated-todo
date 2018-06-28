import * as React from 'react'
import {
    Subscribe,
    Container
} from 'unstated'
import TodoView from './todo_view'

class TodoListContainer extends Container {
    state = {
        todos: [{title: "hi"}],
    }

    addTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    unfinishedTodoCount() {
        return this.state.todos.filter(todo => !todo.finished).length
    }
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

    addTodo(todoListContainer) {
        todoListContainer.addTodo(this.state.todo)
        this.setState({todo: {...this.state.todo, title:""}})
    }

    render() {
        return (
            <Subscribe to={[TodoListContainer]}>
                {todoList => (
                    <div>
                        <ul style={{ listStyle: "none" }}>{todoList.state.todos.map((todo, i) => <TodoView key={i} todo={todo}/> )}</ul>
                        <div>Tasks left: {todoList.unfinishedTodoCount()}</div>
                        <br />
                        <input type="text" onChange={this.onChange} value={this.state.todo.title}/>
                        <button style={{ marginLeft: 10 }} onClick={() => this.addTodo(todoList)}>submit</button>
                    </div>
                )}
            </Subscribe>
        )
    }
}

export default TodoList