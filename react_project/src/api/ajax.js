// axios 二次封装 解决代码冗余
import axios from 'axios'
import qs from 'querystring'
import { message as msg } from 'antd';
// axios拦截器作用1
//                解决服务器不能解决json问题 将json转化为urlencoded格式
          //       统一返回data数据 而不是从response中拿到data
// 配置基本路径
axios.defaults.baseURL = "http://localhost:3000"
// 配置超时时间
axios.defaults.timeout = 2000
 // 请求拦截器
axios.interceptors.request.use((config)=>{
  const {method,data}=config
  if (method.toLocaleLowerCase()==="post" && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(
  // 返回的状态码是2开头
  response =>{
    return response.data
  },
  // 不是2开头 超时时间 网路不通
  error =>{
    let errmsg = '未知错误,联系管理员'
    const {message} = error
    if (message.indexOf('404') !== -1) {
      errmsg = '登录身份超时,重新登录'
    }else if (message.indexOf('Network Error') !== -1) {
      errmsg = '网路不通,检查网路'
    }else if (message.indexOf('timeout') !== -1) {
      errmsg = '网路不稳定'
    }
    
    msg.error(errmsg,1)
    return new Promise(()=>{})
  }
)
export default axios