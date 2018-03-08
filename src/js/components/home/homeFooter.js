import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom'

export default class HomeFooter extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section className="home-footer">
                <div className="home-footer-link">
                    <span>关注我们:</span>
                    <Link className="home-weixin" to=""></Link>
                    <Link className="home-weibo" to=""></Link>
                </div>
                <div className="home-footer-copyright">
                    <p>隐私政策 | 版权声明 | 版权声明</p>
                    <p>大地零一（深圳）科技有限公司 版权所有</p>
                    <p>备案信息</p>
                    <p>xxxxxxxxxxxxx</p>
                </div>
            </section>
        )
  }
}