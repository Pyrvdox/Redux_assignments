import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import UserInput from "./containers/UserInput";
import Articles from "./containers/Articles";

const App = () => (
  <div>
    <Provider store={store}>
      <UserInput/>
      <Articles/>
    </Provider>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);