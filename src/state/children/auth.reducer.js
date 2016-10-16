import {LOGIN_SUCCESS} from '../../auth/auth.page/auth.actions';

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
