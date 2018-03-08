import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDemoAction , changSildbarState} from '../../Actions/homeAction';
import { fetchPostsIfNeeded } from '../../Actions/fetchAction';
import {FormattedMessage} from 'react-intl';


import {Router, Route, Link} from 'react-router-dom'

class HomeActivity extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        //接口未定义会报请求错误 定义接口就可以了
        //this.props.dispatch(fetchPostsIfNeeded(changeDemoAction, ''))
    }
    backToHome() {
        this.props.history.goBack()
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
        <div className="activity">
            <section className="home-top">
                <span className="home-top-nav activity-top-nav" onTouchTap={::this.backToHome}>
                </span>
                <span className="home-top-title">攻略详情</span>
                <span className="home-top-btn" onTouchTap={::this.changeLanguage}>中文</span>
            </section>
            <section className="activity-banner">
                <img src={require("../../../img/item-bg.png")}/>
                <div className="activity-container-recommend-circle"></div>
                <div className="activity-container-recommend-circle-hidden"></div>
                <div className="activity-recommend-card-icon">
                    <img src={require("../../../img/light.png")} />
                </div>
            </section>
            <section className="activity-container">
                <section className="activity-container-title">
                    <div className="activity-container-title-min">周末装逼犯</div>
                    <div className="activity-container-title-max">为了封面而买书</div>
                </section>
                <section className="activity-container-txt">
                    <p>大家通常会用什么方法来挑选书籍呢，因为自己平时比较喜欢买书，尤其是对纸质书更加的偏爱。所以，偶尔会有人询问我推荐书或者询问我如何去选书。而我自己经常看到朋友圈有人晒书，其实晒书很容易暴露自己究竟是在看书还是在假装看书，因为我常常看到很多人对买书，包括版本、装帧等等其实并不讲究。</p>
                    <img src={require('../../../img/item-bg.png')} alt=""/>
                    <p>精美的封皮赏心悦目，出色的创意也体现了装帧设计的用心，有什么理由不为其买单呢。记得日剧《重版出来》有一集就说道：封面的设计者就是神奇的魔法师能让作者的书在展示台上凸显出来，让人们一眼就发现这个宝物。</p>
                    <img src={require('../../../img/item-bg.png')} alt=""/>
                    <p>今天小编就来盘点2017年至今出版的小说类里那些有设计感的书籍。(排名不分先后)</p>
                    <h3>《这是不是个人》</h3>
                    <img src={require('../../../img/item-bg.png')} alt=""/>
                    <p>大家通常会用什么方法来挑选书籍呢，因为自己平时比较喜欢买书，尤其是对纸质书更加的偏爱。所以，偶尔会有人询问我推荐书或者询问我如何去选书。而我自己经常看到朋友圈有人晒书，其实晒书很容易暴露自己究竟是在看书还是在假装看书，因为我常常看到很多人对买书，包括版本、装帧等等其实并不讲究。</p>
                </section>
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
export default connect(select)(HomeActivity);