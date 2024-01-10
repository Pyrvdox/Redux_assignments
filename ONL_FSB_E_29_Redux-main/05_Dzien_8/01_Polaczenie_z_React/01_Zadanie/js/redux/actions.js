// export { ADD_ARTICLE, ADD_USER, addArticle, addUser };

const ADD_ARTICLE ="ADD_ARTICLE";
const ADD_USER = "ADD_USER";

const addArticle = (value) => {
    return {
        type: ADD_ARTICLE,
        payload: value,
    };
};

const addUser = (newUser, value) => {
    return {
        type: ADD_USER,
        payload: {[newUser]: value}
    };
};

export { ADD_ARTICLE, ADD_USER, addArticle, addUser };