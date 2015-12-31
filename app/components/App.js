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

	renderTask() {
		return <Task key={key} />
	}

	render() {
	    return (
	    	<div>
		    	<h1>Tasks</h1>
		    	<ul>
		    		{Object.keys(this.state.tasks).map(this.renderTask)}
		    	</ul>
		    	<TaskForm />
		    </div>
	    )
	}
}

export default App;