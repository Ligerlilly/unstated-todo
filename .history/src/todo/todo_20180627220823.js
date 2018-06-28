import React from 'react'
import {
    Provider,
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

class TodoList {
    render() {
        return ( <
            Subscribe to = {
                [CounterContainer]
            } > {
                counter => ( <
                    div >
                    <
                    button onClick = {
                        () => counter.decrement()
                    } > - < /button> <
                    span > {
                        counter.state.count
                    } < /span> <
                    button onClick = {
                        () => counter.increment()
                    } > + < /button> <
                    /div>
                )
            } <
            /Subscribe>
        )
    }
}