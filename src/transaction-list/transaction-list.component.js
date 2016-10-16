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
        return transactions.length
            ? <ul> {transactions.map((transaction, id) => (
            <li key={id}>
                <span>{transaction.amount}</span>
                <span>{transaction.category}</span>
                <span>{transaction.description}</span>
            </li>
        ))} </ul>
            : <div>Nothing</div>;
    }
}
