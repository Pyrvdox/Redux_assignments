// export default combineReducers({
//   counter,
//   products zad 2
// });
import { INCREMENT, DECREMENT, CHANGE_ORDER } from "./actions";
import { ADD_PRODUCT } from "./actions";
import { combineReducers } from "redux";

const initialStateCounter = 0

const counter = (state = initialStateCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload
        case DECREMENT:
            return state - action.payload
        default:
            return state
    }
}

const initialStateProducts = []

const products = (state= initialStateProducts, action) => { 
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, {name: action.payload}]
        case CHANGE_ORDER:
            const stateList = [...state]
            const tempIndex = stateList.indexOf(action.payload.index)
            stateList.splice(tempIndex, 1);
            if(action.payload.value == 1){
                stateList.splice(tempIndex-1,0,action.payload.index)
            } else if (action.payload.value == -1) {
                stateList.splice(tempIndex+1,0,action.payload.index)
            }
            return stateList
        default:
            return state
    }
}



export default combineReducers({
  counter,
  products
});