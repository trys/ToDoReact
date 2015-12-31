/*
 App
 */

import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            tasks: {}
        }
    }

    componentDidMount() {
        var localStorageRef = localStorage.getItem( 'task-list' );
        if ( localStorageRef ) {
            this.setState({
                tasks: JSON.parse( localStorageRef )
            })
        }
    }

    componentWillUpdate( nextProps, nextState ) {
        localStorage.setItem( 'task-list', JSON.stringify( nextState.tasks ) );
    }

    renderTask = ( key ) => {
        return <Task key={key} index={key} details={this.state.tasks[key]} updateTask={this.updateTask} removeTask={this.removeTask} />
    }

    updateTask = ( key ) => {
        this.state.tasks[key].completed = ! ( this.state.tasks[key].completed )
        this.setState({ tasks: this.state.tasks });
    }

    addTask = ( task ) => {
        this.state.tasks[ 'task-' + ( new Date() ).getTime() ] = task;
        this.setState({
            tasks: this.state.tasks
        });
    }

    removeTask = ( key ) => {
        delete this.state.tasks[key];
        this.setState({ tasks: this.state.tasks });
    }

    render() {
        return (
            <div className="wrap tasks">
                <h1>Tasks</h1>
                <ul>
                    {Object.keys(this.state.tasks).map(this.renderTask)}
                </ul>
                <TaskForm addTask={this.addTask} />
            </div>
        )
    }
}

export default App;