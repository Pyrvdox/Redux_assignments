import { decrement, increment } from "../redux/actions";
import store from "../redux/store"

class Counter {
  constructor(rootElement) {
    this.createUI(rootElement);
    this.collectRefs();
    this.reduxConnect();

    this.applyHandlers();
  }

  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div class="card-header">Licznik</div>
      <div class="card-body">
        <h4 class="card-text">Wartość licznika: <span class="badge badge-primary" id="counter-value">0</span></h4>

        <button type="button" class="btn btn-success" id="counter-decrement">-</button>
        <button type="button" class="btn btn-info" id="counter-increment">+</button>
      </div>
    `;
  }

  collectRefs() {
    this.counterValue = this.rootElement.querySelector("#counter-value");
    this.counterDecrement = this.rootElement.querySelector("#counter-decrement");
    this.counterIncrement = this.rootElement.querySelector("#counter-increment");
  }

  reduxConnect() {

    const unsubscribe = store.subscribe(() => {
      this.counterValue.innerText = store.getState().counter
    })
  }
  

  applyHandlers() {
    this.counterIncrement.addEventListener('click', () => {

      const amount = 1;
      store.dispatch(increment(amount));
      
    });
  
    this.counterDecrement.addEventListener('click', () => {

      const amount = 1;
      store.dispatch(decrement(amount));

    });
  }
}

export default Counter;
