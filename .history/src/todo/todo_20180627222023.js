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

function TodoList() {
    return (
        <Subscribe to={[TodoListContainer]}>
            {todoList => (
                <div>
                    <button>test</button>
                    <div>{todoList.state.todos.map(todo => <div>{todo.title}</div>)}</div>
                </div>
            )}
        </Subscribe>
    );
}
