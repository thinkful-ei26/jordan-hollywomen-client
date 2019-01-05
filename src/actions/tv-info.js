import { API_BASE_URL } from '../config.js';

export const FETCH_TV_CAST_REQUEST = 'FETCH_TV_CAST_REQUEST';
export const fetchTvCastRequest = searchTerm => {
    return {
        type: 'FETCH_TV_CAST_REQUEST',
        searchTerm
    }
};

export const FETCH_TV_CAST_SUCCESS = 'FETCH_TV_CAST_SUCCESS';
export const fetchTvCastSuccess = (data) => {
    return {
        type: 'FETCH_TV_CAST_SUCCESS',
        data
    }
}

export const FETCH_TV_CAST_ERROR = 'FETCH_TV_CAST_ERROR';
export const fetchTvCastError = (error) => {
    return {
        type: 'FETCH_TV_CAST_ERROR',
        error
    }
}

export const fetchTvCast = (tvId) => dispatch => {
    dispatch(fetchTvCastRequest ());
    return fetch(`${API_BASE_URL}/tv/${tvId}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchTvCastSuccess(data)))
      .catch(err => dispatch(fetchTvCastError(err)));
  }
