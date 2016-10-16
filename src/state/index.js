import { combineReducers } from 'redux';
import auth from './children/auth';
import transactions from './children/transaction-list';
import categories from './children/category-list';

export default combineReducers({
    auth,
    transactions,
    categories
});
