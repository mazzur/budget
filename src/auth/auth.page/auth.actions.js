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

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const authSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user
});
