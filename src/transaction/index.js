import {connect} from 'react-redux';
import {Transaction} from './transaction.component';
import {fetchCategories, submitTransaction} from './transaction.actions';

export default connect(({categories}, {route: {type}}) => ({
    categories: selectCategoryNames(categories, type),
    type
}), {
    fetchCategories,
    submitTransaction
})(Transaction);

function selectCategoryNames(categories, type) {
    return categories
        .filter((entry) => entry.type === type)
        .map((category) => category.value);
}
