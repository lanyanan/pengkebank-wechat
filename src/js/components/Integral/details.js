import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom'
import '../../././../../public/static/flexble';
import './css/details.css'
import imgTop from './image/imgTop.png';
class  Details extends Component {
    constructor(props){
        super(props)
        this.state={
            bottomY:['','','','','','','','','','','','','']
        }
    }
    componentWillMount(){
    }
    render(){
        return (
            <div>
                <div className="headerTop">
                    <span className="home-top-nav activity-top-nav">
                    <Link to="/integral"></Link>
                    </span>
                    <span className="home-top-title">积分商城详情</span>
                    <span className="home-top-btn">En</span>
                </div>
                <section className="center">
                    <div className="top"></div>
                    <div className="bottom"></div>
                    <section className="positionTop">
                        <img src={imgTop} width="100%" height="100%" />
                        <h1>2天游艇体验券</h1>
                        <h2>产品介绍</h2>
                        <p>
                            啊是个地级市的回答大户无谓u为问问哈我
                            啊是个地级市的回答大户无谓u为问问哈我
                            啊是个地级市的回答大户无谓u为问问哈我
                            啊是个地级市的回答大户无谓u为问问哈我
                            啊是个地级市的回答大户无谓u为问问哈我
                        </p>
                        <h2>适用范围</h2>
                        <p>对比无非翻页官方也</p>
                        <h2>有效期</h2>
                        <p>2018-12-25 17:00</p>
                        <h2>温馨提示</h2>
                        <p>请您尽快消费，以免过了消费时间。</p>
                        <div className="bottomY">
                           {
                               this.state.bottomY.map((val,key)=>{
                                return <span key={key}></span>
                               })
                           }
                           <div className="clear"></div>
                        </div>
                    </section>
                    <div className="bottomIntegral">
                           <div className="left">
                           7283323
                           <i>积分</i>
                           </div>
                           <div className="right">兑 换</div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Details