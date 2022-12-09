import {combineReducers} from 'redux'
import menuReducer from './menuReducer.js'
import itemReducer from './itemReducer.js'




export default combineReducers({
    menu:menuReducer,
    item:itemReducer
})