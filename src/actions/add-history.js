import { API_BASE_URL } from '../config.js';

export const FETCH_ADD_HISTORY_REQUEST = 'FETCH_ADD_HISTORY_REQUEST';
export const fetchAddHistoryRequest = (searchTerm) => {
    return {
        type: 'FETCH_ADD_HISTORY_REQUEST',
        searchTerm
    }
};

export const FETCH_ADD_HISTORY_SUCCESS = 'FETCH_ADD_HISTORY_SUCCESS';
export const fetchAddHistorySuccess = (data) => {
    return {
        type: 'FETCH_ADD_HISTORY_SUCCESS',
        data
    }
}

export const FETCH_ADD_HISTORY_ERROR = 'FETCH_ADD_HISTORY_ERROR';
export const fetchAddHistoryError = (error) => {
    return {
        type: 'FETCH_ADD_HISTORY_ERROR',
        error
    }
}
 
export const fetchAddHistory = (searchTerm) => dispatch => {
    dispatch(fetchAddHistoryRequest ());
    return fetch(`${API_BASE_URL}/history/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            searchTerm
        })
    })
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchAddHistorySuccess(data)))
      .catch(err => dispatch(fetchAddHistoryError(err)));
  }

