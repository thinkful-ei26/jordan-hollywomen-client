import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { graphQlReducer, historyReducer } from './reducers/graphqlreducer';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
    combineReducers({
        form: formReducer,
        graphql: graphQlReducer,
        history: historyReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);