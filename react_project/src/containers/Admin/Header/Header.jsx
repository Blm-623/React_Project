import React, { Component } from 'react'
import {Button} from 'antd'
import {FullscreenOutlined ,FullscreenExitOutlined} from '@ant-design/icons';
// 全屏引入
import screenfull  from 'screenfull'
import './css/header.less'
export default class Header extends Component {
  state={
    isFull:false
  }
  requestFull=()=>{
   
    screenfull.toggle()
  }
componentDidMount(){
  screenfull.onchange(()=>{
    let {isFull}=this.state
    this.setState({isFull:!isFull})
  })
}

  render() {
    return (
      <div className="header">
       <div className="header-top">
        <Button size="small" onClick={this.requestFull}>
          {this.state.isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined /> }
         
          
        </Button>
        <span className="username">欢迎你,乔治</span>
        <Button type="link">退出登录</Button>
       </div>
       <div className="header-bottom">
         <div className="bottom-left">
           <span>首页</span>
         </div>
         <div className="bottom-right">
          <span> xx年xx月xx日 天气晴</span>
         </div>
       </div>
      </div>
    )
  }
}
