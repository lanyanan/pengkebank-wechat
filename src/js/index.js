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
import {Router, Route, Switch, BrowserRouter, HashRouter, Redirect} from 'react-router-dom'

/**
 * 加载异步组件
 */
const AsyncHome = Loadable({
  loader: () => import("./components/home/home"),
  loading: Loading
});
const Login = Loadable({
	loader: () => import("./components/registration/login"),
	loading: Loading
});
const Integral = Loadable({
loader: () => import("./components/Integral/index"),
loading: Loading
});
const IntegralDetails = Loadable({
	loader: () => import("./components/Integral/details"),
	loading: Loading
});

//中英文语言切换
import {IntlProvider, FormattedMessage} from 'react-intl';
import zh_CN from './components/local_language/zh_CN';
import en_US from './components/local_language/en_US';
import intl from 'intl';
import {addLocaleData} from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
addLocaleData([...zh,...en]);


/**
 * 使用tap处理手机端300ms延迟问题
 */
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//使用logger打印action的变化
const loggerMiddleware = createLogger()

//与store进行联合
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

//创建store
let store = createStoreWithMiddleware(Store)


/**
 * 根据当前的session值来判断使用哪种语言
 */
var localeLanguage = {
	locale: 'zh',
	messages: zh_CN
};
(()=>{
	console.log(sessionStorage.getItem("localeLanguage"))
	if(sessionStorage.getItem("localeLanguage")=="en"){
		localeLanguage.locale = "zh";localeLanguage.messages = zh_CN
	}
	if(sessionStorage.getItem("localeLanguage")=="ch"){
		localeLanguage.locale = "en";localeLanguage.messages = en_US
	}
})()


//等DOM加载完成
//这种是hash值改变的
document.addEventListener('DOMContentLoaded', ()=>{
	render((   
		<Provider store={store}>
			<IntlProvider
				locale={localeLanguage.locale} 
            	messages={localeLanguage.messages}>
	        <HashRouter>
	        	<Switch>
		        	<Route exzact path="/home" component={AsyncHome} />
					<Route exzact path="/login" component={Login} />
					<Route exzact path="/integral" component={Integral} />
					<Route exzact path="/integralDetails" component={IntegralDetails} />
		        	<Redirect path="/" to={{pathname: '/home'}} />
		        </Switch>
	        </HashRouter>
	        </IntlProvider>
	  	</Provider>		
	), document.getElementById('ROOT'))
});
