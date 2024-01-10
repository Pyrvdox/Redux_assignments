import {createStore} from "redux";
import {increment, decrement} from "./redux/actions/counterActions";
import counter from "./redux/reducers/counter";

export default function () {
  const {dispatch, subscribe, getState} = createStore(counter);

  const unsubscribe = subscribe(() => {
    console.log(`from subscribe ${getState()}`);
  });

  dispatch(increment(5));
  dispatch(decrement(2));

  unsubscribe();

  dispatch(decrement(2));
  console.log(getState());
}
