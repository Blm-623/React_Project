// 管理项目的ajax 没个请求对应一个请求函数
import ajax from './ajax'
// loginObj如{username:'xx',xxx}
export const reqLogin= async (loginObj)=> ajax.post('http://localhost:3000/login',loginObj)
