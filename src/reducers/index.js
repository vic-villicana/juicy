import {combineReducers} from 'redux'
import menuReducer from './menuReducer.js'



export default combineReducers({
    menu:menuReducer
})