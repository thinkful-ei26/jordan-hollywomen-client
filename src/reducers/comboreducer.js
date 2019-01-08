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

const initialState = {
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

// export function tvIdReducer(state = initialState, action) {
//     if (action.type === FETCH_TV_INFO_REQUEST){
//         return Object.assign({}, state, {
//             searchTerm: action.searchTerm,
//             loading: true,
//             error: null
//         });
//     } else if (action.type === FETCH_TV_INFO_SUCCESS){
//         return Object.assign({}, state, {
//             tvList: action.tvList,
//             loading: false, 
//             error: null
//         });
//     } else if (action.type === FETCH_TV_INFO_ERROR){
//         return Object.assign({}, state, {
//             loading: false,
//             error: action.error
//         })
//     }
//     return state;
// }

// export function tvCastReducer(state = castInitialState, action) {
//     if (action.type === FETCH_TV_CAST_REQUEST){
//         return Object.assign({}, state, {
//             loading: true,
//             error: null
//         });
//     } else if (action.type === FETCH_TV_CAST_SUCCESS){
//         console.log(action.data)
//         return Object.assign({}, state, {
//             castArray: action.data.cast,
//             modalVisible: true,
//             loading: false, 
//             error: null
//         });
//     } else if (action.type === FETCH_TV_CAST_ERROR){
//         return Object.assign({}, state, {
//             loading: false,
//             error: action.error
//         })
//     }
//     return state;
// }
