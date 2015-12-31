/*
 TaskForm
 */

import React from 'react';

class TaskForm extends React.Component {

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
	    			<input type="text" ref="taskName" placeholder="Task" />
	    			<button type="submit">Add Task</button>
	    		</form>
	    	</div>
	    )
	}
}

export default TaskForm;