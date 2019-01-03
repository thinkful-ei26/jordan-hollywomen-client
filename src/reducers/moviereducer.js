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

const initialState = {
    searchTerm: '',
    movieInfo: '',
    movieList: [],
    loading: false,
    error: null
}

export function movieIdReducer(state = initialState, action) {
    if (action.type === FETCH_MOVIE_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_MOVIE_INFO_SUCCESS){
        return Object.assign({}, state, {
            movieInfo: action.movieInfo,
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

export function movieCastReducer(state = initialState, action) {
    if (action.type === FETCH_CAST_INFO_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_CAST_INFO_SUCCESS){
        return Object.assign({}, state, {
            castInfo: action.castInfo,
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

