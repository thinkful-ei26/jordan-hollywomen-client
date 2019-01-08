import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
// import { movieIdReducer, movieCastReducer } from './reducers/moviereducer';
// import { tvIdReducer, tvCastReducer } from './reducers/tvreducer';
import { movieIdReducer, movieCastReducer, tvIdReducer, tvCastReducer } from './reducers/comboreducer';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
    combineReducers({
        form: formReducer,
        movieInfo: movieIdReducer,
        movieCast: movieCastReducer,
        tvInfo: tvIdReducer,
        tvCast: tvCastReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);