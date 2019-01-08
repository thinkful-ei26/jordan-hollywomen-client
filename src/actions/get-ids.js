import { API_BASE_URL } from '../config.js';

export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST';
export const fetchInfoRequest = searchTerm => {
    return {
        type: 'FETCH_INFO_REQUEST',
        searchTerm
    }
};

export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const fetchInfoSuccess = (movieList) => {
    return {
        type: 'FETCH_INFO_SUCCESS',
        movieList
    }
}

export const FETCH_INFO_ERROR = 'FETCH_INFO_ERROR';
export const fetchInfoError = (error) => {
    return {
        type: 'FETCH_INFO_ERROR',
        error
    }
}

export const fetchMovieInfo = (movieSearchTerm) => dispatch => {
    dispatch(fetchInfoRequest());
    return fetch(`${API_BASE_URL}/search/${movieSearchTerm}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => {
        dispatch(fetchInfoSuccess(data.results))
        return data.results;
      })
      .catch(err => dispatch(fetchInfoError(err)));
  }

  export const fetchTvInfo = (tvSearchTerm) => dispatch => {
    dispatch(fetchInfoRequest());
    return fetch(`${API_BASE_URL}/search/tv/${tvSearchTerm}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => {
        dispatch(fetchInfoSuccess(data.results))
        return data.results;
        })      
      .catch(err => dispatch(fetchInfoError(err)));
  }