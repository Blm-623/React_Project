import {increment,decrement} from '../Action/action'
// import {INCREMENT,DECREMENT} from '../action_type'
export default function (pas=0,action) {
 let newdata
 let {type,data} = action
 switch (type) {
   case increment:
    //  console.log(11111)
     newdata = pas + data
    //  console.log(newdata)
     break;
   case decrement:
    //  console.log(22)
    newdata = pas - data
     break;
 
   default:
     return pas
     break;
 }
 return newdata
}