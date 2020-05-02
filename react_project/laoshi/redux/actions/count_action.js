import {INCREMENT,DECREMENT} from '../action_type'

export const increment = (value)=>{
  return {
    type:INCREMENT,
    data:value
  }
}

export const decrement = (value)=>{
  return {
    type:DECREMENT,
    data:value
  }
}