import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/main.scss';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootReducer from "./Reducer/RootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

