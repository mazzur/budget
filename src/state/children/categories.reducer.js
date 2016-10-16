import {CATEGORIES_FETCHED} from '../../transaction/transaction.actions';

export default (state = [], action) => {
    switch (action.type) {
    case CATEGORIES_FETCHED:
        return [].concat(action.categories);
    default:
        return state;
    }
}