/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */
import { combineReducers } from 'redux';
import bankReducer from './bank';
import counterReducer from './counter';

const rootReducer = combineReducers({
  bank: bankReducer,
  counter: counterReducer 
});

export default rootReducer;