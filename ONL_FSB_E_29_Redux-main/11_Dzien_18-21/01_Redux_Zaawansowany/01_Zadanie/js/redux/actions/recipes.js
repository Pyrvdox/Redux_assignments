import {PRODUCT_DETAILS} from "./products";

const ADD_RECIPE = 'ADD_RECIPE'

const RECIPE_DETAILS = 'RECIPE_DETAILS'

const addRecipe = (obj) => {
    return {
        type:ADD_RECIPE,
        payload: obj
    }
}

const recipeDetails = (id) => {
    return {
        type:RECIPE_DETAILS,
        payload: id

    }
}

export {addRecipe, ADD_RECIPE, recipeDetails, RECIPE_DETAILS};