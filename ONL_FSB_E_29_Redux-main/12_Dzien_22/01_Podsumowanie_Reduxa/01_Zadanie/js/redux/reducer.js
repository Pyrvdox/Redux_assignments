// export default combineReducers({
//   counter,
//   list
// })

import {STOP, INCREMENT, SAVE_NUMBER, REMOVE_NUMBER, SET_STARTING_VALUE} from "./actions";
import {combineReducers} from "redux";

const stoperState = {
    isCounting: false,
    value: 0,
    urlValue: 0
}

const savedNumbers = []

const counter = (state = stoperState, action) => {
    switch (action.type){
        case INCREMENT:
            console.log(state.isCounting)
            console.log(state.value)
            return {...state,
                isCounting: true,
                value: state.value + 1
            }
        case STOP:
            console.log(state.isCounting)
            console.log(state.value)
            return {...state,
                isCounting: action.payload //false
            }
        case SET_STARTING_VALUE:
            return {...state, value: action.payload}
        default:
            return state
    }
}

const list = (state = savedNumbers, action) => {
    switch (action.type){
        case SAVE_NUMBER:
            console.log(state.savedCounters)
            return [...state, action.payload]
        case REMOVE_NUMBER:
            const newList = [...state]
            const index = state.indexOf(action.payload);
            newList.splice(index,1);
            return newList
        default:
            return state
    }
}

export default combineReducers({
  counter,
  list
})