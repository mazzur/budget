import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './state';
import API from './api/api.facade';

export default createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(API))
);

