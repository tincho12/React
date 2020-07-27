import React, { Component } from 'react';

class Task extends Component {
    render() {

        const {tarea} = this.props;

        return <div>
            {tarea.title} - {tarea.description} - {tarea.done} - {tarea.id}
            <input type="checkbox"/>
            <button>x</button>
        </div>
    }
}

export default Task