// 创建核心函数
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducer from './reducers'
// 找到烧烤师傅。。。allreducer
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))