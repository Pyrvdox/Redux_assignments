// Akcje

const INCREMENT = 'INCREMENT';
const STOP = 'STOP';
const SAVE_NUMBER = 'SAVE_NUMBER'

const REMOVE_NUMBER = 'REMOVE_NUMBER'

const SET_STARTING_VALUE = 'SET_STARTING_VALUE'

const increment = () => {
    return {
        type: INCREMENT,

    }
}

const stop = () => {
    return {
        type: STOP,
        payload: false
    }
}

const save = (value) => {
    return {
        type: SAVE_NUMBER,
        payload: value
    }
}

const remove = (value) => {
    return {
        type: REMOVE_NUMBER,
        payload: value
    }
}

const link = (value) => {
    return {
        type: SET_STARTING_VALUE,
        payload: value
    }
}


export {INCREMENT, increment, STOP, stop, SAVE_NUMBER, save, REMOVE_NUMBER, remove, SET_STARTING_VALUE, link};