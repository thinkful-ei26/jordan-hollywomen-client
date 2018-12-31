import {
    FETCH_TITLE_INFO_REQUEST,
    FETCH_TITLE_INFO_SUCCESS,
    FETCH_TITLE_INFO_ERROR
} from '../actions/getData';

const initialState = {
    searchTerm: '',
    titleInfo: '',
    loading: false,
    error: null
}

export default function dataReducer(state = initialState, action) {
    if (action.type === FETCH_TITLE_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_TITLE_INFO_SUCCESS){
        return Object.assign({}, state, {
            titleInfo: action.titleInfo,
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_TITLE_INFO_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}