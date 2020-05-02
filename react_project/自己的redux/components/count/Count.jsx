import React, { Component } from 'react'
import {increment,decrement} from '../../Action/action'
import store from '../../store'
export default class Count extends Component {
  
  increment = ()=>{
    let {value} = this.refs.presentNode
    
    store.dispatch(increment(value*1))
  }
  decrement = ()=>{
    let {value} = this.refs.presentNode
    store.dispatch(decrement(value*1))

  }
  incrementadd = ()=>{
    let {value} = this.refs.presentNode
    if (store.getState() %2 ===1) {
      store.dispatch(increment(value*1))
    }
  }
  incrementAsync = ()=>{
    let {value} = this.refs.presentNode
    setTimeout(() => {
      store.dispatch(increment(value*1))
      
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 style={{fontSize : '40px'}}>当前的数字是:{store.getState()}</h1>
        <hr/><br/>
        <select ref="presentNode" >
          <option value="1">1</option>
          <option value="2">2</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementadd}>单数加</button> &nbsp;
        <button onClick={this.incrementAsync }>延迟一秒加</button> &nbsp;
      </div>
    )
  }
}
