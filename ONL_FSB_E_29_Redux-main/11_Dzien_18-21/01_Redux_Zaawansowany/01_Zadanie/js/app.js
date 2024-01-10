import React from "react";
import Main from "./components/Main";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Main />);
