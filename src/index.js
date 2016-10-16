// @flow
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import { authSuccess } from './state/children/auth';
import firebase, { initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from './api/firebase/config';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const store = configureStore();

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
        <AppContainer>
          <Root store={store}/>
        </AppContainer>,
        document.getElementById('root')
    );
}

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    render(
      <AppContainer>
        <NextRoot store={store}/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}