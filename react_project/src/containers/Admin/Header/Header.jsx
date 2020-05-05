import React, { Component } from 'react'
import {Button,Modal} from 'antd'
import {FullscreenOutlined ,FullscreenExitOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
// 全屏引入
import screenfull  from 'screenfull'
import {connect} from 'react-redux'
import {deleteUserInfo} from '../../../redux/action/login'
import './css/header.less'

const { confirm } = Modal;
 class Header extends Component {
  state={
    isFull:false
  }
  requestFull=()=>{
   
    screenfull.toggle()
  }
// 退出登录
  logout=()=>{
    confirm({
      title: '确定退出吗？',
      icon: <ExclamationCircleOutlined />,
      content: '想好了',
      cancelText:'取消',
      okText:'确定',
// 这里的this指向有问题  要用箭头函数
      onOk:()=> {
        this.props.deleteUserInfo()
      },
      onCancel() {

      },
    });
    

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
        <Button type="link"onClick={this.logout}>退出登录</Button>
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
export default connect(
  (state)=>({}),//应声状态
  {
    deleteUserInfo
  }
)(Header)
