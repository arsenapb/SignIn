import { createStore, combineReducers } from 'redux';

import signInReducer from './reducers/SignInReducer';

const rootReducer = combineReducers(
    { 
        signInReducer: signInReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;