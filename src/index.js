import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducer/index.reducer";

const store = configureStore({
    //! never write reducers in this
    reducer: rootReducer,
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
</React.StrictMode>);
