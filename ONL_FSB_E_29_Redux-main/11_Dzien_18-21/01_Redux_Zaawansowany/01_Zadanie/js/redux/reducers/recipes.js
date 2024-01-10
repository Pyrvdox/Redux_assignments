import {ADD_RECIPE, RECIPE_DETAILS} from "../actions/recipes";
import { combineReducers } from "redux";

const recipesListInit = [
    {
        id: 1,
        name: "Pomidorówka",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [1, 2, 3]
    },
    {
        id: 2,
        name: "Coś innego",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [3, 1]
    },
    {
        id: 3,
        name: "Jeszcze inny przepis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    }
];

const newIDHandler = (state) => {
    return state.length +1
}

const recipesList = (state=recipesListInit, action ) => {
    switch (action.type){
        case ADD_RECIPE:
            console.log("STATE : ", state)
            return [...state,{id: newIDHandler(state), ...action.payload, products: action.payload.products.map((prod) => parseInt(prod.id))}]
        default:
            return state
    }
};

export {recipesList};