import React, { Component } from 'react'
import {Button,Modal} from 'antd'
import {FullscreenOutlined ,FullscreenExitOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'
// 全屏引入
import screenfull  from 'screenfull'
import {connect} from 'react-redux'
import {deleteUserInfo} from '../../../redux/action/login'
import './css/header.less'
import {reqWeatherData} from '@/api/index'

const { confirm } = Modal;
@connect( 
  state =>({username:state.userInfo.user.username}),//应声状态
{
  deleteUserInfo
}
)
 class Header extends Component {
  state={
    isFull:false,
    time: dayjs().format('YYYY年MM月DD日 HH:mm:ss'),
    weatherData:{},//天气信息
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
  // 请求天气信息
   getWeather= async ()=>{
    let result = await reqWeatherData()
    const {dayPictureUrl,weather,temperature} = result
    this.setState({weatherData:{dayPictureUrl,weather,temperature}})
    }
componentDidMount(){
  screenfull.onchange(()=>{
    let {isFull}=this.state
    this.setState({isFull:!isFull})
  })
  this.timer=setInterval(() => {
   this.setState({time:dayjs().format('YYYY年MM月DD日 HH:mm:ss')})
  }, 1000);
  // 天气请求
//  this.getWeather()
}
componentWillUnmount(){
  clearInterval(this.timer)
}
  render() {
    let {username}=this.props
    let {isFull,time,weatherData}=this.state
    return (
      <div className="header">
       <div className="header-top">
        <Button size="small" onClick={this.requestFull}>
          {isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined /> }
         
          
        </Button>
    <span className="username">欢迎你,{username}</span>
        <Button type="link"onClick={this.logout}>退出登录</Button>
       </div>
       <div className="header-bottom">
         <div className="bottom-left">
           <span>首页</span>
         </div>
         <div className="bottom-right">
          <span> {time}</span>
          <img src={weatherData.dayPictureUrl} alt=""/>
          <span className='tianqi'>{weatherData.weather}</span>
          <span className='wendu'>温度:{weatherData.temperature}</span>
         </div>
       </div>
      </div>
    )
  }
}
export default Header
