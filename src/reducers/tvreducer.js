import {
    FETCH_TV_INFO_REQUEST,
    FETCH_TV_INFO_SUCCESS,
    FETCH_TV_INFO_ERROR,
} from '../actions/tvData';

const initialState = {
    searchTerm: '',
    titleInfo: '',
    loading: false,
    error: null
}

export default function tvReducer(state = initialState, action) {
    if (action.type === FETCH_TV_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_TV_INFO_SUCCESS){
        return Object.assign({}, state, {
            titleInfo: action.titleInfo,
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