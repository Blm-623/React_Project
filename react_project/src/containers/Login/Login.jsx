import React, { Component } from 'react'
import { Form, Input, Button,message } from 'antd';
import {connect} from 'react-redux'
import {saveUserInfo} from '../../redux/action/login'
// import {Redirect} from 'react-router-dom'
import Check from '@/containers/Hoc/Check'
import {reqLogin} from '../../api/index'

import "./css/login.less"
import logo from './images/logo.png'


@connect(
  state => ({isLogin:state.userInfo.isLogin}),//映射状态
{
  saveUserInfo
}
)
@Check
class Login extends Component {
   
     onFinish = async values => {
       //表单提交并且验证数据成功的回调函数 自动收集数据
      //  发送axios请求
      // values 为json格式 服务器不认识 所以自己要拼写uainc
      let result = await reqLogin(values)
      // console.log(result);
      let {status,data,msg} = result
      if (status === 0) {
        message.success('登录成功 小伙子！',1)
        this.props.saveUserInfo(data)//存取用户信息
        // 在登录成功是 挑战到 admin页面。。。
        this.props.history.replace('/admin')
      } else{
        message.error(msg)
      }
  }
  passwordTest=(_,value="")=>{//value设置一个默认值 否则自定义的规则 返回的是一个undefined
    // vlaues就是可在表单输入的内容
    let err=[]
    if (!value.trim()) {
      return Promise.reject("密码必须输入")
    } 
     if (value.length < 4) {
      err.push("密码必须大于四位")
    }
     if (value.length > 12) {
      err.push("密码必须小于12位")
    } 
     if (!(/^\w+$/).test(value)) {
      err.push("密码必须是英文,数字,下划线组成")
    } 
    if (err.length !== 0) {
      return Promise.reject(err)
    }else{
      return Promise.resolve()

    }
    
    
  }
  render() {
    // if (this.props.isLogin) {
    //   // 在render函数中 用redirect进行跳转
    //  return <Redirect to ="/admin"/>
    // }
    return (
      <div className="login">
        <header>
          <img src={logo} alt="logo"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <span>用户登录</span>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}//表单提交的回调
          >
            <Form.Item
              name="username"//form校验必须添加name属性
              rules={[//声明式校验
                {required:true,message:'用户名为必填项!'},
                {min:4,message:'用户名最少四位数'},
                {max:12,message:'用户名不得大于12位'},
                {pattern:(/^\w+$/),message:'用户名必须是英文,数字,下划线组成'},
              ]}
            >
              <Input  placeholder="来将可留姓名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {validator:this.passwordTest}//自定义校验规则 ,随着用户的输入 一次一次条用passwordTest回调
              ]}
            >
              <Input
               
                type="password"
                placeholder="油条炸糕豆腐脑!!"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
export default Login