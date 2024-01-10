// Reducer zwracający tablicę produktów
import {ADD_PRODUCT, FILTER_PRODUCTS, REMOVE_PRODUCT} from "./actions";
import { combineReducers } from "redux";

const initSate = []

const products = (state = initSate, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return [...state, action.payload]
        case REMOVE_PRODUCT:
            const newState = [...state]
            const index = state.indexOf(action.payload);
            //console.log(index, action.payload)
            newState.splice(index,1);
            return newState
        default:
            return state
    }
}

const filterState = 0
const routes = (state = filterState, action) => {
    switch (action.type){
        case FILTER_PRODUCTS:
            if(action.payload !== 0){
                return action.payload
            }
            return 0
        default:
            return state
    }
}

export default combineReducers({
    products,
    routes
});