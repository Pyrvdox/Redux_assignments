import {INCREMENT, DECREMENT} from "../actions/counterActions";

const initialState = 0;

function counterReducer(state = initialState, {type, payload}) {
  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    default:
      return state;
  }
}

export default counterReducer;
