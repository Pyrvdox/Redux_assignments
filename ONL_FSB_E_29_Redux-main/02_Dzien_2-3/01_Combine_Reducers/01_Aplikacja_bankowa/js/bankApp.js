// Tu powinny się znaleźć odpowiednie importy
import { createStore } from 'redux'; 
import rootReducer from './redux/reducers/index'
import { withdrawMoney, depositMoney } from './redux/actions/bankActions'; 

const bankApp = {

  start(rootElement) {
    this.createUI(rootElement);
    this.createStore();
    this.collectRefs();
    this.applyHandlers();
  },

  // Tej metody nie powinniśmy ruszać :)
  // Tworzymy tu szablon UI
  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div>
        <h1>Saldo:<span>0</span></h1>

        <div>
          $: <input type="number" id="money" />
          <button id="withdraw">Wypłać</button>
          <button id="deposit">Wpłać</button>
        </div>
      </div>
    `;
  },

  // Tutaj zbieramy referencje do odpowiednich elementów
  // Tej metody też nie trzeba zmieniać ;)
  collectRefs() {
    this.depositEl = this.rootElement.querySelector("#deposit");
    this.withdrawEl = this.rootElement.querySelector("#withdraw");
    this.saldoEl = this.rootElement.querySelector("h1 span");
    this.inputEl = this.rootElement.querySelector("input");
  },

  // W tej metodzie należy utworzyć nowy store
  // Następnie zapisać się na zmiany i na każdą z nich
  // zamienić wartość tekstu w elemencie `saldoEl` na wartość ze store + PLN
  // np. this.saldoEl.innerText = `wartosc-ze-store PLN`
  createStore() {
    this.store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
    const initialBalance = this.store.getState().bank.balance;
    if (this.saldoEl) {
      this.saldoEl.innerText = `${initialBalance !== undefined ? initialBalance : 0} PLN`;
    }
  
    this.store.subscribe(() => {
      const updatedBalance = this.store.getState().bank.balance;
      if (this.saldoEl) {
        this.saldoEl.innerText = `${updatedBalance !== undefined ? updatedBalance : 0} PLN`;
      }
      console.log(this.store.getState())
    });
  },
  
  applyHandlers() {

    this.depositEl.addEventListener('click', () => {
      const amount = parseInt(this.inputEl.value);
      if (!isNaN(amount)) {
        this.store.dispatch(depositMoney(amount));
        this.inputEl.value = ''; 
      }
    });
  
    this.withdrawEl.addEventListener('click', () => {
      const amount = parseInt(this.inputEl.value);
      if (amount > 0) {
        this.store.dispatch(withdrawMoney(amount));
        this.inputEl.value = ''; 
      }
    });
  },
};

export default bankApp;
