import React, { Component } from 'react'

export default class count extends Component {
state ={
  count:0
}
increment=()=>{
 let {value}= this.refs.userSelected
//  console.log(value);
let {count} = this.state
count += value*1
this.setState({count})
}
decrement=()=>{
  let {value}= this.refs.userSelected
//  console.log(value);
let {count} = this.state
count -= value*1
this.setState({count})

}
incrementIfodd=()=>{
 let {count}= this.state
  if (count%2 === 1) {
    let {value}= this.refs.userSelected
    //  console.log(value);
    count += value*1
    this.setState({count})
    
  }
}
incrementAsync=()=>{
  let {value}= this.refs.userSelected
    //  console.log(value);
    let {count} = this.state
    count += value*1
  setTimeout(() => {
    
    this.setState({count})
  }, 1000);
}
  render() {
    return (
      <div>
      <h1>当前求和为:{this.state.count}</h1>
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
