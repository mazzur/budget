import { List, fromJS } from 'immutable';

const TRANSACTIONS_FETCHED = 'TRANSACTIONS_FETCHED';
export const fetchTransactions = () => (dispatch, getState, API) => {
    return API.getTransactions().then((transactions) => {
        dispatch({
            type: TRANSACTIONS_FETCHED,
            transactions
        });
    });
};

const TRANSACTION_SUBMITTED = 'TRANSACTION_SUBMITTED';
export const submitTransaction = (transaction) => (dispatch, getState, API) => {
    return API.submitTransaction(transaction)
        .then(() => dispatch({
            type: TRANSACTION_SUBMITTED
        }));
};

export default (state = new List(), action) => {
    switch (action.type) {
    case TRANSACTIONS_FETCHED:
        return fromJS(action.transactions);
    default:
        return state;
    }
}