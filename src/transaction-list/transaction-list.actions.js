export const TRANSACTIONS_FETCHED = 'TRANSACTIONS_FETCHED';
export const fetchTransactions = () => (dispatch, getState, API) => {
    return API.getTransactions().then((transactions) => {
        dispatch({
            type: TRANSACTIONS_FETCHED,
            transactions
        });
    });
};
