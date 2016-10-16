import { fromJS, List } from 'immutable';

const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';
export const fetchCategories = () => (dispatch, getState, API) => API.getCategories()
    .then((categories) => {
        dispatch({
            type: CATEGORIES_FETCHED,
            categories
        });
    });

export default (state = new List(), action) => {
    switch (action.type) {
    case CATEGORIES_FETCHED:
        return fromJS(action.categories);
    default:
        return state;
    }
};
