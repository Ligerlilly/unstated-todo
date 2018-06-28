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

function Counter() {
    return (
      <Subscribe to={[CounterContainer]}>
        {counter => (
          <div>
            <button onClick={() => counter.decrement()}>-</button>
            <span>{counter.state.count}</span>
            <button onClick={() => counter.increment()}>+</button>
          </div>
        )}
      </Subscribe>
    );
  }
