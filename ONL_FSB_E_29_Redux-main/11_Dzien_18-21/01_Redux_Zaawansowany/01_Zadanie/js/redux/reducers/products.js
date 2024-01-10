import {ADD_PRODUCT, PRODUCT_DETAILS} from "../actions/products";
import { combineReducers } from "redux";




const productsListInit = [
    { id: 1, name: "Pomidory" },
    { id: 2, name: "Przyprawa curry" },
    { id: 3, name: "Olej" },
    { id: 4, name: "Wołowina 500g" },
    { id: 5, name: "Ziemniaki" },
    { id: 6, name: "Pomidory" },
    { id: 7, name: "Przyprawa curry" },
    { id: 8, name: "Olej" },
    { id: 9, name: "Wołowina 500g" },
    { id: 10, name: "Ziemniaki" },
];

const newIDHandler = (state) => {
    return state.length +1
}

const productsList = (state=productsListInit, action ) => {
    switch (action.type){
        case ADD_PRODUCT:
            console.log("REDUX:",state)
            console.log(newIDHandler(state))

            return [...state, { id:newIDHandler(state), ...action.payload}]
        default:
            return state
    }
};

export {productsList};