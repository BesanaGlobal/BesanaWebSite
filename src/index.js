import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/i18n/index.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
