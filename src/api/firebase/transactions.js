import store from '../../store';
import firebase from 'firebase';
import {fetchFirebaseList} from './utils';
const transactionPath = (id) => `transactions/${store.getState().auth.get('user').uid}`;
export function getTransactions() {
    return fetchFirebaseList(transactionPath());
}

export function submitTransaction(transaction) {
    return firebase.database().ref(transactionPath()).push(transaction);
}