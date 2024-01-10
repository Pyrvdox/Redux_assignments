import { ADD_ARTICLE, ADD_USER, addArticle, addUser } from "./actions";
import { combineReducers } from "redux";

const newInit = {jan:0, gosia:0};
const articlesListInit = [];

const users = (state = newInit, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}

const articles = (state = articlesListInit, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload]
        default:
            return state
    }
}

export default combineReducers({
   users,
   articles
});

