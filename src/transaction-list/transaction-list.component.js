import React, { Component } from 'react';

export class TransactionList extends Component {
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
