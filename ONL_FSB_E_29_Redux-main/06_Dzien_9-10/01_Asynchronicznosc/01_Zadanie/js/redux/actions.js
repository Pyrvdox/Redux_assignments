// Plik z akcjami

const QUOTE_FETCHING = 'QUOTE_FETCHING';
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = 'QUOTE_ERROR';

const ADD_FAV = 'ADD_FAV';

const startFetching = (obj) => {
    return {
        type: QUOTE_FETCHING,
        payload: obj,
    };
}

const quoteFetched = (obj) => {
    return {
        type: QUOTE_FETCHED,
        payload: obj,
    };
}

const quoteError = (obj) => {
    return {
        type: QUOTE_ERROR,
        payload: obj,
    };
}

const favourites = (obj) => {
    return {
        type: ADD_FAV,
        payload: obj,
    };
}

export {startFetching, QUOTE_FETCHING, quoteError, QUOTE_ERROR, quoteFetched, QUOTE_FETCHED, favourites, ADD_FAV};