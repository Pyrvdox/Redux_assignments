// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// należy dodać kreatory akcji i je eksportować

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

const addToList = (obj) => {
    return {
        type: ADD_PRODUCT,
        payload: obj
    }
}

const deleteFromList = (obj) => {
    return {
        type: REMOVE_PRODUCT,
        payload: obj
    }
}

const filterProducts = (filterPrice) => {
    return {
        type: FILTER_PRODUCTS,
        payload: filterPrice
    }
}

export {addToList, ADD_PRODUCT, deleteFromList, REMOVE_PRODUCT, filterProducts, FILTER_PRODUCTS};