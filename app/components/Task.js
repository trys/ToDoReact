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
	    return <li><input type="checkbox" checked={task.completed} onChange={this.updateTask} />{task.name}</li>
	}
}

export default Task;