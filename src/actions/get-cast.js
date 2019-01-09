import { API_BASE_URL } from '../config.js';

export const FETCH_CAST_INFO_REQUEST = 'FETCH_CAST_INFO_REQUEST';
export const fetchCastInfoRequest = searchTerm => {
    return {
        type: 'FETCH_CAST_INFO_REQUEST',
        searchTerm
    }
};

export const FETCH_CAST_INFO_SUCCESS = 'FETCH_CAST_INFO_SUCCESS';
export const fetchCastInfoSuccess = (data) => {
    return {
        type: 'FETCH_CAST_INFO_SUCCESS',
        data
    }
}

export const FETCH_CAST_INFO_ERROR = 'FETCH_CAST_INFO_ERROR';
export const fetchCastInfoError = (error) => {
    return {
        type: 'FETCH_CAST_INFO_ERROR',
        error
    }
}

//import in modal and pass in movieId
export const fetchMovieCast = (id) => dispatch => {
    dispatch(fetchCastInfoRequest ());
    return fetch(`${API_BASE_URL}/movie/${id}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchCastInfoSuccess(data)))
      .catch(err => dispatch(fetchCastInfoError(err)));
  }

  export const fetchTvCast = (id) => dispatch => {
    dispatch(fetchCastInfoRequest ());
    return fetch(`${API_BASE_URL}/tv/${id}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchCastInfoSuccess(data)))
      .catch(err => dispatch(fetchCastInfoError(err)));
  }

