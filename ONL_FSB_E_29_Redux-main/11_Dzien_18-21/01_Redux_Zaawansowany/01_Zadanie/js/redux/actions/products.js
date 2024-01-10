//import { v4 as uuidv4 } from 'uuid';
import productsList from './recipes'
const ADD_PRODUCT = 'ADD_PRODUCT'

const PRODUCT_DETAILS = 'PRODUCT_DETAILS'

const addProduct = (obj) => {
    return {
        type:ADD_PRODUCT,
        payload: obj

    }
}

const productDetails = (id) => {
    return {
        type:PRODUCT_DETAILS,
        payload: id

    }
}

export {addProduct, ADD_PRODUCT, productDetails, PRODUCT_DETAILS};