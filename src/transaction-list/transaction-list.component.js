import React, {Component} from 'react';

export default class TransactionList extends Component {
    props: {
        fetchTransactions: any
    };

    componentWillMount() {
        this.props.fetchTransactions();
    }

    render() {
        const transactions = this.props.transactions;
        return transactions.size
            ? <ul> {transactions.map((transaction, id) => (
            <li key={id}>
                <span>{transaction.get('amount')}</span>
                <span>{transaction.get('category')}</span>
                <span>{transaction.get('description')}</span>
            </li>
        ))} </ul>
            : <div>Nothing</div>;
    }
}
