// 该文件是高阶组件，用于检查传递过来的组件 是否合格
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function (ReciveComponent) {
  @connect(
    state =>({isLogin:state.userInfo.isLogin}),
    {
      
    }
  )
  class TargetComponent extends Component{
    render(){
      const {isLogin} = this.props
      const {pathname}=this.props.location
        //判断一下路由
       if (!isLogin && pathname !== '/login') return <Redirect to ="/login"/>
       if (isLogin && pathname ==='/login') return <Redirect to="/admin"/>
       return(
        <ReciveComponent {...this.props}/>
      )
    }
  }
  return TargetComponent
}