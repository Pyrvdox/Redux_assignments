import React from "react";
import ReactDOM from "react-dom";
import { StopperWithTimer } from "./components/Stopper";

const App = () => (
  <div>
    <StopperWithTimer>czas start</StopperWithTimer>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
