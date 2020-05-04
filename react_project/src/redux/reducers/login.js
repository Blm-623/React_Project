import {SAVE_USERINFO} from '../action_type'


let _user 
try {
  _user  = JSON.parse(localStorage.getItem('user'))
} catch (error) {
  _user={}
}
let _token = localStorage.getItem('token')

let initState = {user:_user || {},token:_token || ''}

export default function (preState = initState,action) {
  let {type,data} = action
  let newState
  switch (type) {
    case SAVE_USERINFO:
      newState = {...data}
      return newState
  
    default:
      return preState
  }
}