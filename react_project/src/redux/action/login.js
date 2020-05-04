import {SAVE_USERINFO} from '../action_type'

export const saveUserInfo = userObj => {
  let {user,token}=userObj
  //localStorage本地保存数据 key value 都是字符串
  localStorage.setItem('user',JSON.stringify(user))
  localStorage.setItem('token',token)

  return{ type:SAVE_USERINFO,data:userObj}
}