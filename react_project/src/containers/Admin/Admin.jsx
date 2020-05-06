import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd'
import './admin.less'
import Header from './Header/Header'

const {  Footer, Sider, Content } = Layout;

@connect(
  (state)=>({
    
  isLogin:state.userInfo.isLogin

}),//映射状态
{
  
}//操作状态方法
)
class Admin extends Component {
  render() {

    if (!this.props.isLogin) {
      // 在render函数中 用redirect进行跳转
     return <Redirect to ="/login"/>
    }
    return (
      <Layout className="admin-css">
      <Sider>Sider</Sider>
      <Layout>
        <Header />
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
}
export default Admin