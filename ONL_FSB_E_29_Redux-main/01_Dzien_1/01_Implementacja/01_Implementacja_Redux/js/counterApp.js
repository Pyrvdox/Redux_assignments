// Tu dodaj odpowiednie importy (createStore, akcje, reducer)
import { createStore } from "./redux/customStore";
import { increment, decrement, INCREMENT } from "./redux/actions/counterActions";
import { counterReducer } from "./redux/reducers/counter";

export default function () {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

  const store = createStore({counter: 0},counterReducer);

  const listenChanges = () => {
    const state = store.getState()
    console.log(`from subscribe ${state.counter} `);
  }

  store.subscribe(listenChanges);
  store.dispatch(increment(5));
  store.dispatch(decrement(2));

  const unsub = store.subscribe(listenChanges);
  unsub();
  store.dispatch(decrement(2));
  console.log(store.getState().counter);
}

