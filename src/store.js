import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import dataReducer from './reducers/datareducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        data: dataReducer
    }),
    applyMiddleware(thunk)
);

export default store;