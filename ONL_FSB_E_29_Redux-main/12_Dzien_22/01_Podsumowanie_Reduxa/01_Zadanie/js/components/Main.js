import React from "react";
import List from "../containers/List"
import Counter from "../containers/Counter"
import {Provider} from "react-redux";
import store from "../redux/store";
import {HashRouter, Route, Routes} from "react-router-dom";

const Main = () => {

    return (<>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Counter/>}/>
                    <Route path='/:field' element={<Counter/>}/>
                </Routes>
            </HashRouter>

                <List/>

        </Provider>

    </>)
};

export default Main;
