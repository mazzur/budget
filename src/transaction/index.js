import { connect } from 'react-redux';
import { Transaction } from './transaction.component';
import { fetchCategories } from '../state/children/category-list';
import { submitTransaction } from '../state/children/transaction-list';

export default connect(({ categories }, { route: { type } }) => ({
    categories: selectCategoryNames(categories, type),
    type
}), {
    fetchCategories,
    submitTransaction
})(Transaction);

function selectCategoryNames(categories, type) {
    return categories
        .filter(entry => entry.get('type') === type)
        .map(category => category.get('value'));
}
