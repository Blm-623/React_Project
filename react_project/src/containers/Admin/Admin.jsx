import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {deleteUserInfo} from '../../redux/action/login'
class Admin extends Component {
  logout =()=>{
    // 删除哟呵护数据
    this.props.deleteUserInfo()
    
  }
  render() {

    if (!this.props.isLogin) {
      // 在render函数中 用redirect进行跳转
     return <Redirect to ="/login"/>
    }
    return (
      <div style={{fontSize:'20px'}}>
        Admin... {this.props.username} 登录成功
        <button onClick={this.logout}>退出denglv</button>
      </div>
    )
  }
}

export default connect(
  (state)=>({
    
    username:state.userInfo.user.username,
    isLogin:state.userInfo.isLogin
  
  }),//映射状态
  {
    deleteUserInfo
  }//操作状态方法
)(Admin)
 