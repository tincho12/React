import React, { Component } from 'react';
import Task from './task';
class Tasks extends Component {
    render() {
        return this.props.tasks.map((t) => <Task tarea={t} key={t.id} /> );
        
    }
}

export default Tasks;