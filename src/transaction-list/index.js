import { connect } from 'react-redux';
import { TransactionList } from './transaction-list.component';
import { fetchTransactions } from '../state/children/transaction-list';

export default connect(({ transactions }) => ({ transactions }), {
    fetchTransactions
})(TransactionList);
