import firebase from 'firebase';
import store from '../store';

export const requireAuth = (nextState, replace) => {
    if (!store.getState().auth.user) {
        replace({
            pathname: '/auth',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};

export const notAuth = (nextState, replace) => {
    if (store.getState().auth.user) {
        replace({
            pathname: '/home',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};


