import { API_BASE_URL } from '../config.js';

export const FETCH_TV_INFO_REQUEST = 'FETCH_TV_INFO_REQUEST';
export const fetchTvInfoRequest = searchTerm => {
    return {
        type: 'FETCH_TV_INFO_REQUEST',
        searchTerm
    }
};

export const FETCH_TV_INFO_SUCCESS = 'FETCH_TV_INFO_SUCCESS';
export const fetchTvInfoSuccess = (tvInfo) => {
    return {
        type: 'FETCH_TV_INFO_SUCCESS',
        tvInfo
    }
}

export const FETCH_TV_INFO_ERROR = 'FETCH_TV_INFO_ERROR';
export const fetchTvInfoError = (error) => {
    return {
        type: 'FETCH_TV_INFO_ERROR',
        error
    }
}

export const fetchTvInfo = (searchTerm) => dispatch => {
    dispatch(fetchTvInfoRequest());
    return fetch(`${API_BASE_URL}/search/${searchTerm}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchTvInfoSuccess(data)))
      .catch(err => dispatch(fetchTvInfoError(err)));
  }