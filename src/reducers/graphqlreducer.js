import {
    FETCH_INFO_REQUEST,
    // FETCH_CAST_INFO_SUCCESS,
    FETCH_INFO_SUCCESS,
    FETCH_INFO_ERROR,
} from '../actions/graphql';

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
    searchTerm: '',
    // cast: [],
    tvData: [],
    movieData: [],
    loading: false,
    error: null
}

const initialHistoryState = {
    recentSearches: [],
}

export function graphQlReducer(state = initialState, action) {
    if (action.type === FETCH_INFO_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_INFO_SUCCESS){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm.data,
            tvData: action.searchTerm.data.tv,
            movieData: action.searchTerm.data.movie,
            loading: false, 
            error: null
        });
    // } else if (action.type === FETCH_CAST_INFO_SUCCESS){
    //         return Object.assign({}, state, {
    //             cast: action.cast.data,
    //             loading: false, 
    //             error: null
    //     });
    } else if (action.type === FETCH_INFO_ERROR){
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
            searchTerm: action.searchTerm,
            searchDate: action.searchDate,
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
            searchTerm: action.searchTerm,
            searchDate: action.searchDate,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_ADD_HISTORY_SUCCESS){
        console.log(action)
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