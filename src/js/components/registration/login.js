import React, { Component } from 'react';
import '../../../../public/static/flexble';
import './css/reset.css';
import './css/login.css';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
function showToastNoMask(text) {
    Toast.info(text, 2, null, false);
  }
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            time:60, 
            obtain:false,
            moblie:''
        }
    }
    componentWillMount(){
    }
    obtain(){
        let input = this.refs.myInput,
            inputValue = input.value;
        let reg = /^0?(13[0-9]|15[012356789]|18[012346789]|14[57]|17[678]|170[059]|14[57]|166|19[89])[0-9]{8}$/;
        let flag = reg.test(inputValue);
        if(flag==''||flag.length<11){
            return showToastNoMask('请输入正确的手机号')
        } else if(flag==false){
            return showToastNoMask('请输入正确的手机号')
        }else{
            // 发送请求
            console.log(inputValue)
        }
        this.setState({
            obtain:true
        })
        let siv = setInterval(() => {
            this.setState((preState) => ({
                time: preState.time - 1,
            }), () => {
              if (this.state.time == 0) {
                clearInterval(siv);
                this.setState({
                    obtain:false,
                    time:60
                })
              }
            });
          }, 1000)

    }
    tianxie(){
        let yzm = this.refs.yzm;
        if(yzm.value==''){
            return showToastNoMask('请输入验证码')
        }else{
            // 判断是否是纯数字
        }
    }
    render(){
        return (<div className="content">
            <section className="return"></section>
            <section className="title">
                <h1>您好，</h1>
                <p>欢迎来到日子里，验证码登陆</p>
            </section>
            <section className="moblie">
                <div className="number">
                    <label>+86</label>
                    <input type="tel" placeholder="请输入号码" minLength='11' maxLength='11'  ref="myInput"/>
                    <label className="obtainYzm" onClick={this.obtain.bind(this)}>获取验证码</label>
                    <div className="clear"></div>
                </div>
                {
                    this.state.obtain==false ? '' : <div className="inputYzm">
                    <input type="tel" placeholder="请输入验证码" ref="yzm"  minLength="4" maxLength="6" />
                    <label>{this.state.time}s重新获取</label>
                </div>
                }
                {
                    this.state.obtain==false ? '' : <div className="center"><div className="next" onClick={this.tianxie.bind(this)}>下一步</div></div>
                }  
            </section>
        </div>)
    }
}
export default Login