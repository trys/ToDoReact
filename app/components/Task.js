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
		if( task.completed ) {
			taskClass += ' task-completed';
		}
	    return (
	    	<li className={taskClass}>
	    		<input type="checkbox" checked={task.completed} onChange={this.updateTask} id="task_{index}" />
	    		<label htmlFor="task_{index}">{task.name}</label>
	    		<button onClick={this.props.removeTask.bind(null, index)}>&times;</button>
	    	</li>
	    )
	}
}

export default Task;