import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDemoAction } from '../Actions/homeAction';
import { fetchPostsIfNeeded } from '../Actions/fetchAction';


import {Router, Route, Link} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        var DomId = document.getElementById("wrapper");
            var myScroll,
                pullDownEl, pullDownOffset,
                pullUpEl, pullUpOffset,
                generatedCount = 0;
            function pullDownAction () {
                setTimeout(function () {    // <-- Simulate network congestion, remove setTimeout from production!
                    var el, li, i;
                    el = document.getElementById('thelist');
                    for (i=0; i<3; i++) {
                        li = document.createElement('li');
                        li.innerText = 'Generated row ' + (++generatedCount);
                        el.insertBefore(li, el.childNodes[0]);
                    }
                    
                    myScroll.refresh();     // Remember to refresh when contents are loaded (ie: on ajax completion)
                }, 1000);   // <-- Simulate network congestion, remove setTimeout from production!
            }
            function pullUpAction () {
                setTimeout(function () {    // <-- Simulate network congestion, remove setTimeout from production!
                    var el, li, i;
                    el = document.getElementById('thelist');
                    for (i=0; i<3; i++) {
                        li = document.createElement('li');
                        li.innerText = 'Generated row ' + (++generatedCount);
                        el.appendChild(li, el.childNodes[0]);
                    }
                    
                    myScroll.refresh();     // Remember to refresh when contents are loaded (ie: on ajax completion)
                }, 1000);   // <-- Simulate network congestion, remove setTimeout from production!
            }
            function loaded() {
                pullDownEl = document.getElementById('pullDown');
                pullDownOffset = pullDownEl.offsetHeight;
                pullUpEl = document.getElementById('pullUp');   
                pullUpOffset = pullUpEl.offsetHeight;
                
                myScroll = new iScroll(DomId, {
                    useTransition: true,
                    topOffset: pullDownOffset,
                    onRefresh: function () {
                        if (pullDownEl.className.match('loading')) {
                            pullDownEl.className = '';
                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                        } else if (pullUpEl.className.match('loading')) {
                            pullUpEl.className = '';
                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                        }
                    },
                    onScrollMove: function () {
                        if (this.y > 5 && !pullDownEl.className.match('flip')) {
                            pullDownEl.className = 'flip';
                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
                            this.minScrollY = 0;
                        } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                            pullDownEl.className = '';
                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                            this.minScrollY = -pullDownOffset;
                        } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                            pullUpEl.className = 'flip';
                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
                            this.maxScrollY = this.maxScrollY;
                        } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                            pullUpEl.className = '';
                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                            this.maxScrollY = pullUpOffset;
                        }
                    },
                    onScrollEnd: function () {
                        if (pullDownEl.className.match('flip')) {
                            pullDownEl.className = 'loading';
                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';                
                            pullDownAction();   // Execute custom function (ajax call?)
                        } else if (pullUpEl.className.match('flip')) {
                            pullUpEl.className = 'loading';
                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';                
                            pullUpAction(); // Execute custom function (ajax call?)
                        }
                    }
                });
                
                setTimeout(function () { DomId.style.left = '0'; }, 800);
            }
            setTimeout(loaded, 200)
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos} = this.props;
    console.log(visibleTodos)
    return (
    <div>
<div id="wrapper">
    <div id="scroller">
        <div id="pullDown">
            <span className="pullDownIcon"></span><span className="pullDownLabel">Pull down to refresh...</span>
        </div>

        <ul id="thelist">
            <li onTouchTap = {()=>alert(9)}>Pretty row 1</li>
            <li>Pretty row 2</li>
            <li>Pretty row 3</li>
            <li>Pretty row 4</li>
            <li>Pretty row 5</li>
            <li>Pretty row 6</li>
            <li>Pretty row 7</li>
            <li>Pretty row 8</li>
            <li>Pretty row 9</li>
            <li>Pretty row 10</li>
            <li>Pretty row 11</li>
            <li>Pretty row 12</li>
            <li>Pretty row 13</li>
            <li>Pretty row 14</li>
            <li>Pretty row 15</li>
            <li>Pretty row 16</li>
            <li>Pretty row 17</li>
            <li>Pretty row 18</li>
            <li>Pretty row 19</li>
            <li>Pretty row 20</li>
            <li>Pretty row 21</li>
            <li>Pretty row 22</li>
            <li>Pretty row 23</li>
            <li>Pretty row 24</li>
            <li>Pretty row 25</li>
            <li>Pretty row 26</li>
            <li>Pretty row 27</li>
            <li>Pretty row 28</li>
            <li>Pretty row 29</li>
            <li>Pretty row 30</li>
            <li>Pretty row 31</li>
            <li>Pretty row 32</li>
            <li>Pretty row 33</li>
            <li>Pretty row 34</li>
            <li>Pretty row 35</li>
            <li>Pretty row 36</li>
            <li>Pretty row 37</li>
            <li>Pretty row 38</li>
            <li>Pretty row 39</li>
            <li>Pretty row 40</li>
        </ul>
        <div id="pullUp">
            <span className="pullUpIcon"></span><span className="pullUpLabel">Pull up to refresh...</span>
        </div>
    </div>
</div>
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