import {
    FETCH_MOVIE_INFO_REQUEST,
    FETCH_MOVIE_INFO_SUCCESS,
    FETCH_MOVIE_INFO_ERROR,
} from '../actions/movieData';

const initialState = {
    searchTerm: '',
    movieInfo: '',
    loading: false,
    error: null
}

export default function movieReducer(state = initialState, action) {
    if (action.type === FETCH_MOVIE_INFO_REQUEST){
        return Object.assign({}, state, {
            searchTerm: action.searchTerm,
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_MOVIE_INFO_SUCCESS){
        return Object.assign({}, state, {
            movieInfo: action.titleInfo,
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