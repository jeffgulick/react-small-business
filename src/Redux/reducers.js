import { combineReducers } from 'redux';
import initState from '../data/state'

const business = (state = initState, action) => {
    switch(action.type){
        case "ADD_BUSINESS":
            return [...state, action.value]
        case "REMOVE_BUSINESS":
            const temp = [...state]
            temp.splice(action.value, 1)
            return temp
        default:
            return state
    }
}

const loggedIn = (state = initState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return true
        case 'SIGN_OUT':
            return false
        default:
            return state
    }
}

const getUserName = (state = initState.user, action) => {
    switch(action.type){
        case 'GET_USER':
            return action.value;
        default:
            return state
    }
}
/////////////////////////////////////////////////////////////
const addLocation = (state = {}, action) => {
    switch(action.type){
        case 'ADD_LOCATION':
            return action.value;
        default:
            return state;
    }
}


export default combineReducers({ business, loggedIn, getUserName, addLocation })