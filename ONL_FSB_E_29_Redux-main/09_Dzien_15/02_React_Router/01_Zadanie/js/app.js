import React from "react";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";
import store from "./redux/store";
import ConnectedCart from "./containers/Cart";
import {HashRouter, Route, Routes} from "react-router-dom";


const Cos = () => {
    return (<h1>Hello</h1>)
}

const App = () => {
    return(
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Cos />}/>
                    <Route path='/:field' element={<ConnectedCart />}/>
                </Routes>
            </HashRouter>
        </Provider>
   )
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

