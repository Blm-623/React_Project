import {combineReducers} from 'redux'
import loginReducer from './login'

export default combineReducers({
  // 以后想要获取用户信息 一定要  .userInfo
  userInfo:loginReducer
})