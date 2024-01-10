import {combineReducers} from "redux";
import {recipesList} from "./recipes";
import {productsList} from "./products";

export default combineReducers({
    recipesList,
    productsList
});