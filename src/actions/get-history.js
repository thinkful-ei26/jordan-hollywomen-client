import { API_BASE_URL } from '../config.js';

export const FETCH_HISTORY_REQUEST = 'FETCH_HISTORY_REQUEST';
export const fetchHistoryRequest = () => {
    return {
        type: 'FETCH_HISTORY_REQUEST',
    }
};

export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const fetchHistorySuccess = (data) => {
    return {
        type: 'FETCH_HISTORY_SUCCESS',
        data
    }
}

export const FETCH_HISTORY_ERROR = 'FETCH_HISTORY_ERROR';
export const fetchHistoryError = (error) => {
    return {
        type: 'FETCH_HISTORY_ERROR',
        error
    }
}
 
export const fetchHistory = () => dispatch => {
    dispatch(fetchHistoryRequest ());
    return fetch(`${API_BASE_URL}/history`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchHistorySuccess(data)))
      .catch(err => dispatch(fetchHistoryError(err)));
  }

