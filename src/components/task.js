import React, { Component } from 'react';
import './task.css';

class Task extends Component {
    render() {

        const {tarea} = this.props;

        return <p className="red">
            {tarea.title} - {tarea.description} - {tarea.done} - {tarea.id}
            <input type="checkbox"/>
            <button style={btnDelete}>x</button>
        </p>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    

}

export default Task