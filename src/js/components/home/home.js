import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDemoAction , changSildbarState} from '../../Actions/homeAction';
import { fetchPostsIfNeeded } from '../../Actions/fetchAction';
import HomeFooter from './homeFooter';
import {FormattedMessage} from 'react-intl';


import {Router, Route, Link} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        //接口未定义会报请求错误 定义接口就可以了
        //this.props.dispatch(fetchPostsIfNeeded(changeDemoAction, ''))
    }

    /**
     * 打开sildbar
     * @Author   yananLan
     * @DateTime 2018-03-07
     */
    changSildbarState() {
        this.props.dispatch(changSildbarState(true))
    }

    /**
     * 关闭sildbar
     * @Author   yananLan
     * @DateTime 2018-03-07
     */
    closeSildbar(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.dispatch(changSildbarState(false))
    }

    /**
     * 设置session 刷新页面切换语言
     * @Author   yananLan
     * @DateTime 2018-03-07
     */
    changeLanguage() {
        if(sessionStorage.getItem("localeLanguage")=="en"){
            sessionStorage.setItem("localeLanguage","ch")
        } else {
            sessionStorage.setItem("localeLanguage","en")
        }
        window.location.reload();
        
    }
    render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos} = this.props;
    console.log(visibleTodos.sildBarState)
    return (
        <div className="home">
            <section className="home-top">
                <span className="home-top-nav" onTouchTap={::this.changSildbarState}>
                </span>
                <span className="home-top-title"><FormattedMessage id="title"></FormattedMessage></span>
                <span className="home-top-btn" onTouchTap={::this.changeLanguage}>En</span>
            </section>
            <section className="home-container-list">
                {
                    visibleTodos.listArr.map((item, index)=>{
                    return  <div key={index} className="home-container-banner">
                                <img src={require("../../../img/item-bg.png")}/>
                                <div className="home-container-banner-bg"></div>
                                <div className="home-container-banner-txt">
                                    <img src={require("../../../img/fm.png")}/>
                                    <span>PChouse家居杂志 高雅气质</span>
                                    <Link to="/">[逛店]</Link>
                                </div>
                            </div>
                    })
                }
            </section>
            <section className="home-container-banner-recommend">
                <div className="home-container-recommend-title">
                    <span className="home-container-recommend-title-name">品牌推荐</span>
                    <span className="home-container-recommend-title-more">MORE</span>
                </div>
                <section className="home-recommend-container">
                    {
                        visibleTodos.itemArr.map((item, index)=>{
                            return  <div key={index} className="home-container-recommend-item">
                                        <div className="home-container-recommend-item-img">
                                            <div className="home-container-recommend-circle"></div>
                                            <div className="home-container-recommend-circle-hidden"></div>
                                            <img className="home-recommend-card-img" src={require("../../../img/item-bg.png")}/>
                                            <div className="home-recommend-card-icon">
                                                <img src={require("../../../img/icon.png")} />
                                            </div>
                                            <label>800</label>
                                        </div>
                                        <div className="home-container-recommend-item-txt">
                                            <h3>-游艇体验券-</h3>
                                            <span>無線刺激 高層次的玩家</span>
                                        </div>
                                    </div>
                        })
                    }
                </section>
            </section>
            <HomeFooter/>
            <section className={(visibleTodos.sildBarState)?("home-sildbar home-sildbar-show"):("home-sildbar home-sildbar-hidden")}>
                <div className={(visibleTodos.sildBarState)?("home-sildbar-bg home-sildbar-show"):("home-sildbar-bg home-sildbar-hidden")} onTouchTap={::this.closeSildbar}></div>
                <div className={(visibleTodos.sildBarState)?("home-sildbar-container home-sildbar-container-show"):("home-sildbar-container home-sildbar-container-hidden")}>
                    <section className="home-sildbar-header">
                        <div className="home-sildbar-header-name">
                            <span className="home-sildbar-header-title">尽在无言</span>
                            <span className="home-sildbar-header-edit">点击编辑信息</span>
                        </div>
                        <div className="home-sildbar-header-pic">
                            <img src={require("../../../img/item.png")} />
                        </div>
                    </section>
                    <section className="home-sildbar-nav">
                        {
                            visibleTodos.navArr.map((item, index)=>{
                                return  <div key={index} className="home-sildbar-item">
                                            <span>{item.navName}</span>
                                            <span className="home-sildbar-item-icon">></span>
                                        </div>
                            })
                        }
                    </section>
                    <div className="home-sildbar-set-btn">设置</div>
                </div>
            </section>
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