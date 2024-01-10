import store from "../redux/store"
import { addProduct, ADD_PRODUCT , changeOrder, CHANGE_ORDER} from "../redux/actions";

class ShoppingList {
  constructor(rootElement) {
    this.createUI(rootElement);
    this.reduxConnect();
    this.collectRefs();
    this.applyHandlers();

  }

  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div class="card-header">Lista zakupów</div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Produkt..." />
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="button" id="shop-add">Dodaj</button>
            </div>
          </div>
        </form>

        <ul class="list-group mt-3" id="shop-list">
        </ul>
      </div>
    `;
  }

  collectRefs() {
    this.form = this.rootElement.querySelector("form");
    this.shopList = this.rootElement.querySelector("#shop-list");
  } 

  reduxConnect() {
    const unsubscribe = store.subscribe(() => {
      let shopListElements = store.getState().products;
      //console.log(shopListElements)
      //console.log('nasza lista', this.shopList)
      shopListElements.map((element, index) => {
        const singleElement = document.createElement('li');
        
        console.log(singleElement);
        singleElement.innerText = element.name;

        const buttonUp = document.createElement('button');
        const buttonDown = document.createElement('button');
        buttonUp.innerText = "+";
        buttonUp.addEventListener('click', () => {
          store.dispatch(changeOrder(index, 1))
        })
        buttonDown.innerText = "-";
        buttonDown.addEventListener('click', () => {
          store.dispatch(changeOrder(index, -1))
        })
        singleElement.appendChild(buttonUp);
        singleElement.appendChild(buttonDown);

        this.shopList.appendChild(singleElement);

        shopListElements.splice(singleElement,1)

        
      })
     
      

      // for(let item of shopListElements){
      //   const singleElement = document.createElement('li');
        
      //   console.log(singleElement);
      //   singleElement.innerText = item;

      //   const buttonUp = document.createElement('button');
      //   const buttonDown = document.createElement('button');
      //   buttonUp.innerText = "+";
      //   buttonDown.innerText = "-";
      //   singleElement.appendChild(buttonUp);
      //   singleElement.appendChild(buttonDown);

      //   this.shopList.appendChild(singleElement);
        
      // }
    })
    
  }

  applyHandlers() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

    })
    const addToListSubmit = this.form.querySelector('button')
    addToListSubmit.addEventListener('click', () => {
      
      const inputValueSL = this.form.querySelector('input').value

      if(inputValueSL != null){
        store.dispatch(addProduct(inputValueSL))
      }
      
    })
  }
}

export default ShoppingList;
