// @flow
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Home from './home/home.component';
import Auth from './auth/auth.page';
import store from './store';
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router';
import { hashHistory } from 'react-router';
import firebase, { initializeApp } from 'firebase';
import { requireAuth, notAuth } from './auth/guards';
import { authSuccess } from './auth/auth.page/auth.actions';
import { FIREBASE_CONFIG } from './api/firebase/config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Transaction from './transaction';
import { TRANSACTION_TYPES } from './transaction/transaction.component';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

initializeApp(FIREBASE_CONFIG);
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(authSuccess(user));
    } else {
        debugger;
    }

    bootstrap();
});

let bootstrapped: boolean = false;
function bootstrap() {
    if (bootstrapped) {
        return;
    }
    bootstrapped = true;
    render(
        <Provider store={store}>
            <MuiThemeProvider>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <Route path="/auth" component={Auth} onEnter={notAuth}>
                        </Route>
                        <Route path="/home" component={Home} onEnter={requireAuth}>
                        </Route>
                        <Route path="/spending" component={Transaction} onEnter={requireAuth} type={TRANSACTION_TYPES.SPENDING}>
                        </Route>
                        <Route path="/receiving" component={Transaction} onEnter={requireAuth} type={TRANSACTION_TYPES.RECEIVING}>
                        </Route>
                    </Route>
                </Router>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
}