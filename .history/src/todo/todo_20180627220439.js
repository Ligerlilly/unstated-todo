import React from 'react'
import {
    Provider,
    Subscribe,
    Container
} from 'unstated'

type Todo {
    title: string
    finished: boolean
}

class TodoContainer extends Container < Todo > {
    state = {
        title: ""
        finished: false
    };

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }
}