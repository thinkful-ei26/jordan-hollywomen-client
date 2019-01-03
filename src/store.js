import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { movieIdReducer, movieCastReducer } from './reducers/moviereducer';
import { tvIdReducer, tvCastReducer } from './reducers/tvreducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        movieId: movieIdReducer,
        movieCast: movieCastReducer,
        tvId: tvIdReducer,
        tvCast: tvCastReducer
    }),
    applyMiddleware(thunk)
);

export default store;