import React from 'react';
import App from './App';
import Home from './home/home.component';
import Auth from './auth/auth.page';
import Transaction from './transaction';
import { requireAuth, notAuth } from './auth/guards';
import { Route } from 'react-router';
import { TRANSACTION_TYPES } from './transaction/transaction.component';

export default (
  <Route path="/" component={App}>
      <Route path="/auth" component={Auth} onEnter={notAuth} />
      <Route path="/home" component={Home} onEnter={requireAuth} />
      <Route
        path="/spending"
        component={Transaction}
        onEnter={requireAuth}
        type={TRANSACTION_TYPES.SPENDING} />
      <Route
        path="/receiving"
        component={Transaction}
        onEnter={requireAuth}
        type={TRANSACTION_TYPES.RECEIVING} />
  </Route>
);