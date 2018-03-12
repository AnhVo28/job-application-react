import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import reducers from "./redux/reducers";
import i18n from "./i18n.js";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <I18nextProvider i18n = {i18n}>
        <Provider store={store}>
            <App />
        </Provider>
    </I18nextProvider>,
    document.getElementById("root")
);
registerServiceWorker();
