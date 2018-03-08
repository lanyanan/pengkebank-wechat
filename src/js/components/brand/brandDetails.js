import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDemoAction , changSildbarState} from '../../Actions/homeAction';
import { fetchPostsIfNeeded } from '../../Actions/fetchAction';


import {Router, Route, Link} from 'react-router-dom'

class BrandDetails extends Component {
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
        <div className="details">
            <section className="home-top">
                <span className="home-top-nav activity-top-nav" onTouchTap={::this.backToHome}>
                </span>
                <span className="home-top-title">品牌详情</span>
                <span className="home-top-btn" onTouchTap={::this.changeLanguage}>En</span>
            </section>
            <section className="details-banner">
                <div className="details-banner-img">
                    <img src={require("../../../img/item-bg.png")} alt=""/>
                </div>
                <div className="details-banner-brand-pic">
                    <img src={require("../../../img/adida.png")} alt=""/>
                </div>
            </section>
            <section className="details-brand-info">
                <div className="details-brand-info-header">
                    <div className="details-brand-name">Adolf Adi Dassler</div> 
                    <div className="details-brand-words">没有不可能</div> 
                    <div className="details-brand-time">营业时间：8:00-22:30</div> 
                    <div className="details-brand-address">
                        <span className="details-brand-address-txt">
                            南山区蛇口半岛城邦日子里4楼L322号
                        </span>
                        <span className="details-brand-address-mark"></span>
                        <span className="details-brand-address-iphone"></span>
                    </div> 
                </div>
                <div className="details-brand-bottom">
                    <p>阿迪达斯这三种标志并不是从品牌初创时期就一直存在的，可以说，阿迪达斯标志的不断演变的历史也是阿迪达斯这一世界知名体育用品有限公司不断前进的一种佐证。
                    阿迪达斯三条纹标志是最早被启用的，在阿迪达斯品牌成立第二年，也就是1949年就开始应用到阿迪达斯旗下的各类商品中了。其代表了不断前进、不断超越的体育精神。
                    到了1972年，阿迪达斯用三叶草标志逐步代替早期的三条纹标志，以极具象征性的更为美观的三叶草来寓意延展到全世界的体育力量，也同时寄予自身品牌走向世界的愿景
                    </p>
                </div>
            </section>
            <section className="details-recommend-reason">
                <div className="details-recommend-reason-questions">why we like it</div>
                <div className="details-recommend-reason-title">
                    <h3>推薦理由</h3>
                    <p>我们的运动激情让世界变得更和平</p>
                    <p>Impossible is nothing.没有不可能</p>
                    <p>adidas is all in.全倾全力</p>
                </div>
                <div className="details-recommend-reason-txt">
                    <p>阿迪达斯是世界著名体育用品品牌，它来自德国，以创办人Adolf Adi Dassler为品牌命名。经过几十年的发展，先已拥有三大系列：performance（三条纹），originals（三叶草）和style（圆球型LOGO）。其中以三条纹为最主要的品牌标志，三叶草系列因其时尚的设计和大胆的色彩，成为热爱运动的城市达人运动服饰的首选。</p>
                    <img src={require('../../../img/item-bg.png')} alt=""/>
                    <p>不论哪个色系是你所钟爱，也不论哪种主题是你所向往，重要的是，生活本应充满魅力。</p>
                    <img src={require('../../../img/item-bg.png')} alt=""/>
                </div>
            </section>
            <section className="details-btn-order">
                <span>立即预约</span>
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
export default connect(select)(BrandDetails);