import firebase from 'firebase';
import { store } from '../../store';
import { fetchFirebaseList } from './utils';

const transactionPath = () => `transactions/${store.getState().auth.get('user').uid}`;
export function getTransactions() {
    return fetchFirebaseList(transactionPath());
}

export function submitTransaction(transaction) {
    return firebase.database().ref(transactionPath()).push(transaction);
}
