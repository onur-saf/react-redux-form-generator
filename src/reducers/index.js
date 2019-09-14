import  {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
const setFieldReducer = (state=[],action)=>{
    switch (action.type) {
        case "SET_FIELDS":
            return action.payload
        default:
            return state
            }
}
export default combineReducers ({
    form:formReducer,
    fields:setFieldReducer
})