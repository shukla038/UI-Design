import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.scss";
// import App from "./App";
import App from "./containers/App/index";

import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";
const AppComponent = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
const MOUNT_NODE = document.getElementById("root");
ReactDOM.render(AppComponent, MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
