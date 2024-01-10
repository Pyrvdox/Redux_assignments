import React, { Component } from "react";
import User from "./User";
import {createRoot} from "react-dom/client";

class App extends Component {
  render() {
    return (
      <div>
        <User firstName="Jan" lastName="Kowalski" age={44} onClick={() => {}} />
        <hr />
        <User firstName="Bożena" lastName="Kowalska" onClick={() => {}} />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
