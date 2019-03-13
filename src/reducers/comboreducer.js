import {
    FETCH_INFO_REQUEST,
    FETCH_INFO_SUCCESS,
    FETCH_INFO_ERROR,
} from '../actions/get-ids';

import {
    FETCH_CAST_INFO_REQUEST,
    FETCH_CAST_INFO_SUCCESS,
    FETCH_CAST_INFO_ERROR,
} from '../actions/get-cast';

import {
    FETCH_HISTORY_REQUEST,
    FETCH_HISTORY_SUCCESS,
    FETCH_HISTORY_ERROR,

} from '../actions/get-history';

import {
    FETCH_ADD_HISTORY_REQUEST,
    FETCH_ADD_HISTORY_SUCCESS,
    FETCH_ADD_HISTORY_ERROR,

} from '../actions/add-history';

const initialState = {
    movieList: [],
    loading: false,
    error: null
}

const initialHistoryState = {
    recentSearches: [],
}

const castInitialState = {
    castArray: [],
    modalVisible: false,
    loading: false,
    error: null
}

export function idReducer(state = initialState, action) {
    if (action.type === FETCH_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_INFO_SUCCESS){
        return Object.assign({}, state, {
            movieList: action.movieList,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_INFO_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}

export function castReducer(state = castInitialState, action) {
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

export function historyReducer(state = initialHistoryState, action){
    if (action.type === FETCH_HISTORY_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_HISTORY_SUCCESS){
        return Object.assign({}, state, {
            recentSearches: action.recentSearches,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_HISTORY_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }

    if (action.type === FETCH_ADD_HISTORY_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_ADD_HISTORY_SUCCESS){
        return Object.assign({}, state, {
            loading: false, 
            error: null,
            recentSearches: [...state.recentSearches, action.data] 
        });
    } else if (action.type === FETCH_ADD_HISTORY_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}