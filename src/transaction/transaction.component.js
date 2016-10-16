// @flow

import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

export const TRANSACTION_TYPES = {
    SPENDING: 'SPENDING',
    RECEIVING: 'RECEIVING'
};

export class Transaction extends Component {
    props: {
        type: number,
        fetchCategories: any,
        categories: [any]
    };

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            amount: 0,
            description: ''
        };
    }

    componentWillMount() {
        this.props.fetchCategories();
    }

    submitTransaction(category) {
        const {amount, description, date} = this.state;
        const {type} = this.props;
        this.props.submitTransaction({
            type,
            category,
            amount,
            description,
            date
        });
    }

    render() {
        const {categories} = this.props;
        const categoryList = categories.map((category, id) => (
            <button onClick={() => this.submitTransaction(category)} key={id}>{category}</button>
        ));

        return (
            <div>
                <DatePicker hintText="Select Date"/>
                <input type="number" placeholder="0" value={this.state.amount}/>
                <input type="text" placeholder="description" value={this.state.description}/>
                <p>
                    {categoryList}
                </p>
            </div>
        )
    }
}
