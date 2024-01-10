const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = (n) => ({
  type: INCREMENT,
  payload: n
});

const decrement = (n) => ({
  type: DECREMENT,
  payload: n
});

export {INCREMENT, DECREMENT, increment, decrement};
