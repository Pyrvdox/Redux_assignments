/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

import { INCREMENT, DECREMENT } from "../actions/counterActions";

const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + action.payload};
        case DECREMENT:
            return {...state, counter: state.counter - action.payload};
        default:
            return { ...state };    
    }
}

export {counterReducer};