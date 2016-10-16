import {connect} from 'react-redux';
import TransactionList from './transaction-list.component';
import {fetchTransactions} from './transaction-list.actions'

export default connect((state) => state, {
    fetchTransactions
})(TransactionList);

export * from './transaction-list.component';