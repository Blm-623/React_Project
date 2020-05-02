export let increment = (value)=>{
  return {
    type:increment,
    data:value
  }
}
export let decrement = (value)=>{
  return {
    type:decrement,
    data:value
  }
}

