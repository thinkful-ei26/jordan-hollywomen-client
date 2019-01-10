import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import { idReducer, castReducer, getHistoryReducer, addHistoryReducer } from './reducers/comboreducer';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
    combineReducers({
        form: formReducer,
        info: idReducer,
        cast: castReducer,
        history: getHistoryReducer,
        updatedHistory: addHistoryReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);