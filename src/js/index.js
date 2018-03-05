import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import '../css/style.scss';
import Store from './reducers/reducers';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
//import Home from './Home';
import Loading from './components/Loading';

const AsyncHome = Loadable({
  loader: () => import("./components/Home"),
  loading: Loading
});


import {Router, Route, Switch, BrowserRouter, HashRouter, Redirect} from 'react-router-dom'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

let store = createStoreWithMiddleware(Store)

//等DOM加载完成
//这种是hash值改变的
document.addEventListener('DOMContentLoaded', ()=>{
	render((   
		<Provider store={store}>
	        <HashRouter>
	        	<Switch>
		        	<Route exzact path="/home" component={AsyncHome} />
		        	<Redirect path="/" to={{pathname: '/home'}} />
		        </Switch>
	        </HashRouter>
	  	</Provider>		
	), document.getElementById('ROOT'))
});
