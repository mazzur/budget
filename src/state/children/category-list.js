export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';
export const fetchCategories = (type) => (dispatch, getState, API) => {
    return API.getCategories().then((categories) => {
        dispatch({
            type: CATEGORIES_FETCHED,
            categories
        });
    });
};

export default (state = [], action) => {
    switch (action.type) {
    case CATEGORIES_FETCHED:
        return [].concat(action.categories);
    default:
        return state;
    }
}