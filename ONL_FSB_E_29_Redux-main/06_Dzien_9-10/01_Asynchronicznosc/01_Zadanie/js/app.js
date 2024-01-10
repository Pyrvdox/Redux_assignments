import React from "react";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";
import store from "./redux/store";

import Quote from "./containers/Quote";
import Favourites from "./containers/Favourites";

const App = () => (
  <Provider store={store}>
    <Quote/>
    <Favourites/>
  </Provider>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);