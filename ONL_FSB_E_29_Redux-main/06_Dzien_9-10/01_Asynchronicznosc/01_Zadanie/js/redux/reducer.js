// export default combineReducers({
//   quote,
// });
import { QUOTE_ERROR, QUOTE_FETCHED, QUOTE_FETCHING, quoteError, quoteFetched, startFetching , ADD_FAV} from "./actions"
import { combineReducers } from "redux";

const favouritesQuotes = []

const quoteInit = {
    loading: false,
    error: "",
    quote: null,
    author: null
}

const fav = (state=favouritesQuotes, action) =>{
    switch(action.type){
        case ADD_FAV:
            return [...state, action.payload]
        default:
            return state
    }
}

const quote = (state=quoteInit, action) => {
    switch(action.type) {
        case QUOTE_FETCHING:
            return {...state, 
                loading: true, 
                error: "",    
                quote: null,
                author: null}
        case QUOTE_FETCHED:
            return {...state,
                loading: false,
                error: "",
                quote: action.payload.quote,
                author: action.payload.author }
        case QUOTE_ERROR:
            return {...state,
                loading: false,
                error: action.payload.error,
                quote: null,
                author: null}
        default:
            return state
    }
        
}

export default combineReducers({
  quote,
  fav
});