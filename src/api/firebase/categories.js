import store from '../../store';
import {fetchFirebaseList} from './utils';

export function getCategories() {
    return fetchFirebaseList(`categories/${store.getState().auth.get('user').uid}`);
}