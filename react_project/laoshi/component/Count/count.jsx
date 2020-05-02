import React, { Component } from 'react'
import store from '../../redux/store'
import {increment,decrement} from '../../redux/actions/count_action'
export default class count extends Component {

increment=()=>{
 let {value}= this.refs.userSelected
 store.dispatch(increment(value*1))
}
decrement=()=>{
  let {value}= this.refs.userSelected
  store.dispatch(decrement(value*1))


}
incrementIfodd=()=>{
    let {value}= this.refs.userSelected
    if (store.getState() % 2===1) {
      store.dispatch(increment(value*1))
      
    }
}
incrementAsync=()=>{
  let {value}= this.refs.userSelected
  setTimeout(() => {
    store.dispatch(increment(value*1))
    
  }, 1000);
}
  render() {
    return (
      <div>
      <h1>当前求和为:{store.getState()}</h1>
      <select ref="userSelected">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.incrementIfodd}>increment if add</button>
      <button onClick={this.incrementAsync}>decrement async</button>
      </div>
    )
  }
}
