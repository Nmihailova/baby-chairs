import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './js/store/index';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);

serviceWorker.unregister();
