// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const increment = (int) => {
    return {
        type: INCREMENT,
        payload: int
    }
}

const decrement = (int) => {
    return {
        type: DECREMENT,
        payload: int
    }
}

export { INCREMENT, DECREMENT, increment, decrement }
