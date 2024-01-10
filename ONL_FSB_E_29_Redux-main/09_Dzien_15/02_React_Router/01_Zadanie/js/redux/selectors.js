import { createSelector } from "reselect";



// Miejsce na selektory:
const listOfProducts = state => state.products;

const filterList = state => state.routes;


const sumOfProducts = createSelector(
    listOfProducts,
    filterList,
    (products, filtered) => {
        console.log("cała lista", products)
        if(filtered === 0){
            let acc = 0;

            for(let product of products){
                acc += parseInt(product.price)
            }
            return acc
        } else {
            let acc = 0;

            for(let product of products){
                if(product.price <= filtered) {
                    acc += parseInt(product.price)
                }
            }
            return acc
        }
    }
)

const filteredList = createSelector(
    listOfProducts,
    filterList,
    (products, filtered) => {
        return products.filter((product) =>  {
            if(product.price <= filtered){
                return product
            }
        })
    }
)

export {
    sumOfProducts,
    filteredList
};