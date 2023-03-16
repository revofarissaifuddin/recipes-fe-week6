import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Router";
import "./custom.scss";
import { Provider } from "react-redux";
import store from "./Storages/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
