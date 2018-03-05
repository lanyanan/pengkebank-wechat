'use strict';
/**
 * 公共store，建议所有路由下reducer都在此文件进行注册合并
 * @type {store}
 */

import { combineReducers } from 'redux'
import { HomeReducer } from "./homeReducer";
import { postsBySubreddit } from "./fetchReducer";
import { posts } from "./fetchReducer";

const Store = combineReducers({
  posts,               //请求数据的异常在这里处理
  postsBySubreddit,    //注册当前正在进行的异步数据请求
  HomeReducer ,        //种子项目的demoAction  
})

export default Store
