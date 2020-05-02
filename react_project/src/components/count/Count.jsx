import React, { Component } from 'react'
export default class Count extends Component {
  
  increment = ()=>{
    let {value} = this.refs.presentNode
    this.props.increment(value)
  }
  decrement = ()=>{
    let {value} = this.refs.presentNode
    this.props.decrement(value)
  }
  incrementadd = ()=>{
    let {value} = this.refs.presentNode
    if (this.props.count %2 === 1) {
      this.props.increment(value)
      
    }
  }
  incrementAsync = ()=>{
    let {value} = this.refs.presentNode
    setTimeout(() => {
      this.props.increment(value)
      
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 style={{fontSize : '40px'}}>当前的数字是:{this.props.count}</h1>
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
