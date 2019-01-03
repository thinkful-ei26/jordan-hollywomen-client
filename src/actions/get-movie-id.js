import { API_BASE_URL } from '../config.js';

export const FETCH_MOVIE_INFO_REQUEST = 'FETCH_MOVIE_INFO_REQUEST';
export const fetchMovieInfoRequest = searchTerm => {
    return {
        type: 'FETCH_MOVIE_INFO_REQUEST',
        searchTerm
    }
};

export const FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS';
export const fetchMovieInfoSuccess = (movieList) => {
    return {
        type: 'FETCH_MOVIE_INFO_SUCCESS',
        movieList
    }
}

export const FETCH_MOVIE_INFO_ERROR = 'FETCH_MOVIE_INFO_ERROR';
export const fetchMovieInfoError = (error) => {
    return {
        type: 'FETCH_MOVIE_INFO_ERROR',
        error
    }
}

export const fetchMovieInfo = (searchTerm) => dispatch => {
    dispatch(fetchMovieInfoRequest());
    return fetch(`${API_BASE_URL}/search/${searchTerm}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => {
        dispatch(fetchMovieInfoSuccess(data.results))
        return data.results;
      })
      .catch(err => dispatch(fetchMovieInfoError(err)));
  }