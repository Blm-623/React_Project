import {INCREMENT,DECREMENT} from '../action_type'
export default function (preState=0,action) {
  let {type,data}=action
  let newState
  switch (type) {
    case INCREMENT:
      // 操作一些加的
      console.log('jia')
      newState = preState + data
      break;
    case DECREMENT:
      // 操作一些减的
      newState = preState - data
      break;
  
    default:
      // 初始化时候 进入这里
     
      // console.log("初始化")
      return preState
 }
  return newState
}