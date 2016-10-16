import firebase from 'firebase';

export const loginWithGithub = () => (dispatch) => {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(function(result) {
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

export default (state = {}, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return Object.assign(state, {
            user: action.user
        });
        break;
    default:
        return state;
    }
}