import { combineReducers } from 'redux';
import initState from '../data/state'

const business = (state = initState) => {
    return {
        state
    }
}

export default combineReducers({ business })