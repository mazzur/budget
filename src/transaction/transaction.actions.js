export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';
export const TRANSACTION_SUBMITTED = 'TRANSACTION_SUBMITTED';
export const fetchCategories = (type) => (dispatch, getState, API) => {
    return API.getCategories().then((categories) => {
        dispatch({
            type: CATEGORIES_FETCHED,
            categories
        });
    });
};

export const submitTransaction = (transaction) => (dispatch, getState, API) => {
    return API.submitTransaction(transaction)
        .then(() => dispatch({
            type: TRANSACTION_SUBMITTED
        }));
};
