import firebase from 'firebase';
import { Map, fromJS } from 'immutable';

export const loginWithGithub = () => (dispatch) => {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(function (result) {
        debugger;
    }, () => {
        debugger;
    }).catch(() => {
        debugger;
    });
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const authSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user
});

export default (state = new Map(), action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return fromJS({
            user: action.user
        });
    default:
        return state;
    }
}
