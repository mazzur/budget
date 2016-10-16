import { combineReducers } from 'redux';
import auth from './children/auth.reducer';
import transactions from './children/transaction-list.reducer';
import categories from './children/categories.reducer';

export default combineReducers({
    auth,
    transactions,
    categories
});
