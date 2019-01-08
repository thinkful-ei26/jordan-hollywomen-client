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

import {
    FETCH_TV_INFO_REQUEST,
    FETCH_TV_INFO_SUCCESS,
    FETCH_TV_INFO_ERROR,
} from '../actions/get-tv-id';

import {
    FETCH_TV_CAST_REQUEST,
    FETCH_TV_CAST_SUCCESS,
    FETCH_TV_CAST_ERROR,
} from '../actions/tv-info';

const movieInitialState = {
    searchTerm: '',
    movieList: [],
    loading: false,
    error: null
}

const movieCastInitialState = {
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

export function movieCastReducer(state = movieCastInitialState, action) {
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

const tvInitialState = {
    searchTerm: '',
    tvList: [],
    loading: false,
    error: null
}

const tvCastInitialState = {
    castArray: [],
    modalVisible: false,
    loading: false,
    error: null
}

export function tvIdReducer(state = tvInitialState, action) {
    if (action.type === FETCH_TV_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_TV_INFO_SUCCESS){
        return Object.assign({}, state, {
            tvList: action.tvList,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_TV_INFO_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}

export function tvCastReducer(state = tvCastInitialState, action) {
    if (action.type === FETCH_TV_CAST_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_TV_CAST_SUCCESS){
        console.log(action.data)
        return Object.assign({}, state, {
            castArray: action.data.cast,
            modalVisible: true,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_TV_CAST_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}
