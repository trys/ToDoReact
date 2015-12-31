/*
 TaskForm
 */

import React from 'react';

export default class TaskForm extends React.Component {

	createTask = ( event ) => {
		event.preventDefault();
		var task = {
			name: this.refs.taskName.value,
			completed: false
		}
		this.props.addTask( task );
		this.refs.taskForm.reset();
	}

	render() {
	    return (
	    	<div className="task-form">
	    		<h3>Add a task</h3>
	    		<form onSubmit={this.createTask} ref="taskForm">
	    			<input type="text" ref="taskName" />
	    			<button type="submit">+</button>
	    		</form>
	    	</div>
	    )
	}

	static propTypes = {
		addTask: React.PropTypes.func.isRequired
	}
}