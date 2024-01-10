/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */
import { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney } from "../actions/bankActions"

const initialState = {
    balance: 0
  };

const bankReducer = (state = {balance: 0}, action) => { 
    switch (action.type) {
      case WITHDRAW:
        return {
          ...state,
          balance: Math.max(0, state.balance - action.payload)
        };
      case DEPOSIT:
        return {
          ...state,
          balance: state.balance + action.payload
        };
      default:
        return state;
    }
};

export default bankReducer;