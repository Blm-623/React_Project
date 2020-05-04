import React, { Component } from 'react'
import {connect} from 'react-redux'
class Admin extends Component {
  render() {
    return (
      <div style={{fontSize:'20px'}}>
        Admin... {this.props.username} 登录成功
      </div>
    )
  }
}

export default connect(
  (state)=>({username:state.userInfo.user.username}),//映射状态
  {

  }//操作状态方法
)(Admin)
 