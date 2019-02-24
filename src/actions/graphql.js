export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST';
export const fetchInfoRequest = () => {
    return {
        type: 'FETCH_INFO_REQUEST',
    }
};

export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const fetchInfoSuccess = (searchTerm) => {
    return {
        type: 'FETCH_INFO_SUCCESS',
        searchTerm,
    }
}

export const FETCH_CAST_INFO_SUCCESS = 'FETCH_CAST_INFO_SUCCESS';
export const fetchCastInfoSuccess = (id) => {
    return {
        type: 'FETCH_CAST_INFO_SUCCESS',
        id,
    }
}

export const FETCH_INFO_ERROR = 'FETCH_INFO_ERROR';
export const fetchInfoError = (error) => {
    return {
        type: 'FETCH_INFO_ERROR',
        error
    }
}

export const fetchMovieInfo = (searchTerm) => dispatch => {
    dispatch(fetchInfoRequest());
    const title = `${searchTerm}`
    const query = `query getMovie($title: String){
        movie(title: $title) {
            id
            title
            poster_path
            cast {
                gender
            }
        }
    }`
    return fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables: { title }
            })
        })
      .then(res => {
        console.log('res', res)
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => {
        dispatch(fetchInfoSuccess(data))
        return data.data.movie;
      })
      .catch(err => dispatch(fetchInfoError(err)));
  }

  export const fetchCastInfo = (searchTerm ,movieId, tvId) => dispatch => {
    dispatch(fetchInfoRequest());
    const castId = `${tvId}` || `${movieId}`
    const title = `${searchTerm}`
    const query = `query getMovie($title: String){
        movie(title: $title) {
            id
            title
            poster_path
            cast {
                gender
            }
        }
    }`
    return fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables: { title, castId }
            })
        })
      .then(res => {
        console.log('res', res)
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => {
        dispatch(fetchInfoSuccess(data))
        return data.data.movie;
      })
      .catch(err => dispatch(fetchInfoError(err)));
  }

  export const fetchTvInfo = (searchTerm) => dispatch => {
    dispatch(fetchInfoRequest());
    const title = `${searchTerm}`
    const query = `query getTV($title: String){
        tv(title: $title) {
            id
            name
            poster_path
            cast {
                gender
            }
        }
    }`
    return fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables: { title }
            })
        })
      .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
      .then(data => {
        dispatch(fetchInfoSuccess(data))
        return data.data.tv;
        })      
      .catch(err => dispatch(fetchInfoError(err)));
  }