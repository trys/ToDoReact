import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import App from './components/App';
import NotFound from './components/NotFound';

/*
 Routes
 */
var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/todo/:todoId" component={App} />
        <Route path="*" component={NotFound} />
    </Router>
)
ReactDOM.render( routes, document.querySelector('#main'));