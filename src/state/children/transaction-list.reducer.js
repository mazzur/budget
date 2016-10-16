import {TRANSACTIONS_FETCHED} from '../../transaction-list/transaction-list.actions';

export default (state = [], action) => {
    switch (action.type) {
    case TRANSACTIONS_FETCHED:
        return [].concat(action.transactions);
        break;
    default:
        return state;
    }
}