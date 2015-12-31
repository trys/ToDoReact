/*
 Task
 */

import React from 'react';

class Task extends React.Component {
	updateTask = () => {
		this.props.updateTask( this.props.index )
	}

	render = () => {
		var task = this.props.details;
		var index = this.props.index;
		var taskClass = 'task';
		var taskId = 'task_' + index;
		if ( task.completed ) {
			taskClass += ' task-completed';
		}
	    return (
	    	<li className={taskClass}>
	    		<input type="checkbox" checked={task.completed} onChange={this.updateTask} id={taskId} />
	    		<label htmlFor={taskId}>{task.name}</label>
	    		<button onClick={this.props.removeTask.bind(null, index)}>&times;</button>
	    	</li>
	    )
	}
}

export default Task;