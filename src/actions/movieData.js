import { API_BASE_URL } from '../config.js';

export const FETCH_MOVIE_INFO_REQUEST = 'FETCH_MOVIE_INFO_REQUEST';
export const fetchMovieInfoRequest = searchTerm => {
    return {
        type: 'FETCH_MOVIE_INFO_REQUEST',
        searchTerm
    }
};

export const FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS';
export const fetchMovieInfoSuccess = (movieInfo) => {
    return {
        type: 'FETCH_MOVIE_INFO_SUCCESS',
        movieInfo
    }
}

export const FETCH_MOVIE_INFO_ERROR = 'FETCH_MOVIE_INFO_ERROR';
export const fetchMovieInfoError = (error) => {
    return {
        type: 'FETCH_MOVIE_INFO_ERROR',
        error
    }
}

export const fetchMovieInfo = () => dispatch => {
    dispatch(fetchMovieInfoRequest ());
    // go to localhost:8080 
    return fetch(`${API_BASE_URL}/search}`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchMovieInfoSuccess(data)))
      .catch(err => dispatch(fetchMovieInfoError(err)));
  }
