import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import movieReducer from './reducers/moviereducer';
import tvReducer from './reducers/tvreducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        movie: movieReducer,
        tv: tvReducer
    }),
    applyMiddleware(thunk)
);

export default store;