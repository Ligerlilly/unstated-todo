import * as React from 'react'
import {
    Subscribe,
    Container
} from 'unstated'

class TodoListContainer extends Container {
    state = {
        todos: [],
    };

    addTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }
}

class TodoList extends React.Component {
    render() {
        return ( < Subscribe to = {
                [TodoListContainer]
            } > {
                counter => ( <
                    div >

                    <
                    /div>
                )
            } <
            /Subscribe>
        )
    }
}