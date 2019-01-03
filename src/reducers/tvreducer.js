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

const initialState = {
    searchTerm: '',
    tvInfo: '',
    loading: false,
    error: null
}

export function tvIdReducer(state = initialState, action) {
    if (action.type === FETCH_TV_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_TV_INFO_SUCCESS){
        return Object.assign({}, state, {
            tvInfo: action.tvInfo,
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

export function tvCastReducer(state = initialState, action) {
    if (action.type === FETCH_TV_CAST_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_TV_CAST_SUCCESS){
        return Object.assign({}, state, {
            castInfo: action.castInfo,
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

