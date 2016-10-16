import {connect} from 'react-redux';
import TransactionList from './transaction-list.component';
import {fetchTransactions} from '../state/children/transaction-list';

export default connect((state) => state, {
    fetchTransactions
})(TransactionList);

export * from './transaction-list.component';