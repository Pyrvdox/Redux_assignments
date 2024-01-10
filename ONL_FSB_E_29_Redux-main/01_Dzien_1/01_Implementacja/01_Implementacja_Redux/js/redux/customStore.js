/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
const createStore = (initValue, reducererFunction) => {
    self.currentState = initValue
    self.reducererFunction = reducererFunction
    self.listeners = []

    return {
        getState() {
            return currentState
        },

        dispatch(action) {
            currentState = reducererFunction(currentState, action);
            listeners.forEach((listenerFunction) => listenerFunction());
        },
        subscribe(listener) {
            listeners.push(listener);
            return function () {
              listeners = listeners.filter(
                (currentListener) => currentListener !== listener
        )
    };
},
};
};

export { createStore };
