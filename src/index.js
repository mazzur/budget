// @flow
import React from 'react';
import { render } from 'react-dom';
import firebase, { initializeApp } from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import { store } from './store';
import { authSuccess } from './state/children/auth';
import { FIREBASE_CONFIG } from './api/firebase/config';
import Root from './Root';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

initializeApp(FIREBASE_CONFIG);
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(authSuccess(user));
    }
    bootstrap();
});

let bootstrapped = false;
function bootstrap() {
    if (bootstrapped) {
        return;
    }
    bootstrapped = true;
    render(
        <AppContainer>
            <Root store={store} />
        </AppContainer>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextRoot = require('./Root').default; // eslint-disable-line global-require
        render(
            <AppContainer>
                <NextRoot store={store} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
