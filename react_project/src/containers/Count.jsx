import Count from '../components/count/Count'
import {connect} from 'react-redux'
import {increment,decrement} from '../Action/action'

export default connect(mapStateToProps,mapDisPatchToProps)(Count)

function mapStateToProps(state) {
  return {count:state}
}
function mapDisPatchToProps(dispatch) {
  return {
    increment:(value)=>{dispatch(increment(value*1))},
    decrement:(value)=>{dispatch(decrement(value*1))}
  }
}