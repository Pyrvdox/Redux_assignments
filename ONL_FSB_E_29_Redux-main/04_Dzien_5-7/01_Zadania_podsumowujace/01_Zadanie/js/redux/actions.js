// export {
//   INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
//   increment, decrement, addProduct, changeOrder
// };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const CHANGE_ORDER = 'CHANGE_ORDER';

const increment = (int) => {
    return {
        type: INCREMENT,
        payload: int,
    };
};

const decrement = (int) => {
    return {
        type: DECREMENT,
        payload: int,
    };
};

const addProduct = (text) => {
    return {
        type: ADD_PRODUCT,
        payload: text,
    };
}

const changeOrder = (index,value) => {
    return {
        type: CHANGE_ORDER,
        payload: {index, value}
    }
}

export {
  INCREMENT, DECREMENT, 
  ADD_PRODUCT, CHANGE_ORDER,
  increment, decrement, 
  addProduct, changeOrder
};