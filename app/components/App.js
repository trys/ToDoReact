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

	renderTask = ( key ) => {
		return <Task key={key} index={key} details={this.state.tasks[key]} updateTask={this.updateTask} />
	}

	updateTask = ( key ) => {
		this.state.tasks[key].completed = ! ( this.state.tasks[key].completed )
		this.setState({ tasks: this.state.tasks });
	}

	addTask = ( task ) => {
		event.preventDefault();
		this.state.tasks[ 'task-' + ( new Date() ).getTime() ] = task;
		this.setState({
			tasks: this.state.tasks
		});
	}

	renderCompletedTasks = ( tasks ) => {
		if ( Object.keys( tasks ).length === 0 ) {
			return
		}

		return (
			<div>
				<h4>Completed Tasks</h4>
				<ul>
					{Object.keys(tasks).map(this.renderTask)}
				</ul>
			</div>
		)
	}

	render() {
		var tasks = [],
			completed = [],
			allTasks = this.state.tasks;

		Object.keys(allTasks).map(function (key) {
			var task = allTasks[key];
			if ( task.completed ) {
				completed[key] = task;
			} else {
				tasks[key] = task;
			}
		});

	    return (
	    	<div>
		    	<h1>Tasks</h1>
		    	<ul>
		    		{Object.keys(tasks).map(this.renderTask)}
		    	</ul>
		    	{this.renderCompletedTasks(completed)}
		    	<TaskForm addTask={this.addTask} />
		    </div>
	    )
	}
}

export default App;