import {SAVE_USERINFO,DELE_USERINFO} from '../action_type'


let _user 
try {
  _user  = JSON.parse(localStorage.getItem('user'))
} catch (error) {
  _user= null
}
let _token = localStorage.getItem('token')

let initState = {
    user:_user || {},
     token:_token || '',
    isLogin: _user && _token ? true : false
    }

export default function (preState = initState,action) {
  let {type,data} = action
  let newState
  switch (type) {
    case SAVE_USERINFO:
      newState = {...data,isLogin:true}
      return newState
    case DELE_USERINFO:
      newState = {user:{},token:'',isLogin:false}
      return newState

    default:
      return preState
  }
}