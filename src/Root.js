import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

export default ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
);
