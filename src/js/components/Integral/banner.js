import React, { Component } from 'react';
import '../../././../../public/static/flexble';
import 'antd-mobile/dist/antd-mobile.css';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    // imgHeight: 176,
    slideIndex: 0,
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  render() {
    let date = this.props.date;
    return (
        <div>
      <WingBlank>
        <Carousel
          autoplay={true}
        //   autoplayInterval='3000'
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}>
          {date.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height:'100%'}}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',borderRadius:'.08rem'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}

export default Banner