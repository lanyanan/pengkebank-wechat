import React, { Component } from 'react';
import '../../././../../public/static/flexble';
import './css/index.css';
import Banner from './banner';
// import TabExample from './tabs';
class  Integral extends Component {
    constructor(props){
        super(props)
        this.state={
            integral:12562362,
            bannerUrl:['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            tabList:['全部商品','优惠券','体验券','会员专享'],
            _active:0,
        }
    }
    componentWillMount(){
    }
    fillter_click(index){
        this.setState({
            _active: index
        })
    }
    render(){
        return (<div>
            <section className="header">
                <div className="myIntegral">
                    <div className="left">
                        <h2>我的积分</h2>
                        <h1>{this.state.integral}</h1>
                    </div>
                    <div className="headerImage"></div>
                    <div className="clear"></div>
                </div>
                <div className="banner">
                  <Banner date={this.state.bannerUrl}/>
                 </div> 
            </section>
            <section className="tabs">
              <ul className="tabList">
                    {
                        this.state.tabList.map((val,index)=>{
                            return <li key={index} onTouchTap={this.fillter_click.bind(this,index)} className={index ==this.state._active ? 'listActive' :''}>{val}</li>
                        })
                    }
                    <div className="clear"></div>
              </ul>
              <ol className="listOl">
                    <li></li>
                    <li></li>
                    <div className="clear"></div>
              </ol>
            </section>
        </div>)
    }
}
export default Integral