/*
 Home
 */

import React from 'react';
import h from '../helper';
import { History } from 'react-router';
import reactMixin from 'react-mixin';

class Home extends React.Component {

	createList = (event) => {
		event.preventDefault();
		var todoId = this.refs.todoId.value;
		this.history.pushState(null, '/todo/' + h.slugify( todoId ) );
	}

	render() {
	    return (
	    	<form className="add-todo-list" onSubmit={this.createList}>
	    		<input type="text" ref="todoId" />
	    		<button type="submit">Submit</button>
	    	</form>
	    )
	}
}

reactMixin.onClass(Home, History);

export default Home;