import React from 'react'
import {
    Provider,
    Subscribe,
    Container
} from 'unstated'

class TodoContainer extends Container {
    state = {
        count: 0
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