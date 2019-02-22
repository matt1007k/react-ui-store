import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './store'


import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

const history = createHistory();

const middleware = routerMiddleware(history);

const store = configureStore(middleware);
const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

ReactDOM.render(
    <BrowserRouter basename={getBasename()}>
        <Provider store={store}>        
            <Route component={App} />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
