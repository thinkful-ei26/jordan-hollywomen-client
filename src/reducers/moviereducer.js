import {
    FETCH_MOVIE_INFO_REQUEST,
    FETCH_MOVIE_INFO_SUCCESS,
    FETCH_MOVIE_INFO_ERROR,
} from '../actions/get-movie-id';

import {
    FETCH_CAST_INFO_REQUEST,
    FETCH_CAST_INFO_SUCCESS,
    FETCH_CAST_INFO_ERROR,
} from '../actions/movie-info';

const movieInitialState = {
    searchTerm: '',
    movieList: [],
    loading: false,
    error: null
}

const castInitialState = {
    castArray: [],
    modalVisible: false,
    loading: false,
    error: null
}

export function movieIdReducer(state = movieInitialState, action) {
    if (action.type === FETCH_MOVIE_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_MOVIE_INFO_SUCCESS){
        return Object.assign({}, state, {
            movieList: action.movieList,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_MOVIE_INFO_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}

export function movieCastReducer(state = castInitialState, action) {
    if (action.type === FETCH_CAST_INFO_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_CAST_INFO_SUCCESS){
        return Object.assign({}, state, {
            castArray: action.data.cast,
            modalVisible: true,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_CAST_INFO_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}

