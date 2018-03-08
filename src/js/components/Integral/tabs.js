import React, { Component } from 'react';
import '../../././../../public/static/flexble';
import 'antd-mobile/dist/antd-mobile.css';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge>全部商品</Badge> },
  { title: <Badge>优惠券</Badge> },
  { title: <Badge dot>体验券</Badge> },
  { title: <Badge dot>会员专享</Badge> },
];

// const tabs2 = [
//   { title: 'First Tab', sub: '1' },
//   { title: 'Second Tab', sub: '2' },
//   { title: 'Third Tab', sub: '3' },
//   { title: 'Third Tab', sub: '4' },
// ];

const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{background:'#263132'}}>
            <ul>
                
            </ul>
      </div>
      <div style={{background:'#263132'}}>
        Content of second tab2
      </div>
      <div style={{background:'#263132'}}>
        Content of third tab3
      </div>
      <div style={{background:'#263132'}}>
        Content of third tab4
      </div>
    </Tabs>
  </div>
);
export default TabExample
