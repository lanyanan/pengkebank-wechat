import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDemoAction } from '../Actions/homeAction';
import { fetchPostsIfNeeded } from '../Actions/fetchAction';


import {Router, Route, Link} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        //接口未定义会报请求错误 定义接口就可以了
        this.props.dispatch(fetchPostsIfNeeded(changeDemoAction, ''))
    }
    render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos} = this.props;
    console.log(visibleTodos)
    return (
        <div>
            {visibleTodos.successMark}
        </div>
    )
  }
}

//注入想要的state
function select(state) {
  console.log(state)
  return {
    visibleTodos: state.HomeReducer
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Home);