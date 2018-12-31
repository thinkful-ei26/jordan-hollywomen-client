export const FETCH_TITLE_INFO_REQUEST = 'FETCH_TITLE_INFO_REQUEST';
export const fetchTitleInfoRequest = searchTerm => {
    return {
        type: 'FETCH_TITLE_INFO_REQUEST',
        searchTerm
    }
};

export const FETCH_TITLE_INFO_SUCCESS = 'FETCH_TITLE_INFO_SUCCESS';
export const fetchTitleInfoSuccess = (titleInfo) => {
    return {
        type: 'FETCH_TITLE_INFO_SUCCESS',
        titleInfo
    }
}

export const FETCH_TITLE_INFO_ERROR = 'FETCH_TITLE_INFO_ERROR';
export const fetchTitleInfoError = (error) => {
    return {
        type: 'FETCH_TITLE_INFO_ERROR',
        error
    }
}

export const fetchTitleInfo = () => dispatch => {
    dispatch(fetchTitleInfoRequest ());
    // go to localhost:8080 
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=13842c72b65b743bc68b644cf060c727`)
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => dispatch(fetchTitleInfoSuccess(data)))
      .catch(err => dispatch(fetchTitleInfoError(err)));
  }
