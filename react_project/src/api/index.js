// 管理项目的ajax 没个请求对应一个请求函数
import ajax from './ajax'
import {message} from 'antd'
import jsonp from 'jsonp'
import {CITY,AK} from '@/config/index'
// loginObj如{username:'xx',xxx}
export const reqLogin= async (loginObj)=> ajax.post('http://localhost:3000/login',loginObj)

// 请求天气信息
export const reqWeatherData = ()=>{
  const URL = `http://api.map.baidu.com/telematics/v3/weather?location=${CITY}&output=json&ak=${AK}`
  return new Promise((resolve,reject)=>{
      // 使用jsop发送请求
      jsonp(URL,{
        timeout:2000,
      },(err,data)=>{
        if (!err) {
          resolve(data.results[0].weather_data[0])
        }else{
            message.error('天气信息出错！！')
        }
        
      })

  })
}
