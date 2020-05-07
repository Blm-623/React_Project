import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
import Check from '@/containers/Hoc/Check'
import { Layout } from 'antd'
import './admin.less'
import Header from './Header/Header'
import LeftNav from './LeftNav/LeftNav.jsx'

import Home from './Home/Home'
import Bar from './Bar/Bar'
import Category from './Category/Category'
import Line from './Line/Line'
import Pie from './Pie/Pie'
import Product from './Product/Product'
import Role from './Role/Role'
import User from './User/User'

const {  Footer, Sider, Content } = Layout;

@connect(
  state => ({
  isLogin:state.userInfo.isLogin
}),//映射状态
{
  
}//操作状态方法
)
@Check
class Admin extends Component {
  render() {

    // if (!this.props.isLogin) {
    //   // 在render函数中 用redirect进行跳转
    //  return <Redirect to ="/login"/>
    // }
    return (
      <Layout className="admin-css">
      <Sider>
        <LeftNav/>
      </Sider>
    
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route path ="/admin/home"component={Home} />
            <Route path ="/admin/user"component={User} />
            <Route path ="/admin/role"component={Role} />

            <Route path ="/admin/prod_about/category"component={Category} />
            <Route path ="/admin/prod_about/product"component={Product} />
            <Route path ="/admin/charts/bar"component={Bar} />
            <Route path ="/admin/charts/line"component={Line} />
            <Route path ="/admin/charts/pie"component={Pie} />
            <Redirect to="/admin/home"/>


          </Switch>


        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
}
export default Admin