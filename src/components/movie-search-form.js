import React, { Component } from 'react';
import { fetchMovieInfo } from '../actions/get-movie-id';
import { fetchMovieCast } from '../actions/movie-info';
// import { connect } from 'react-redux';

export default class MovieSearchForm extends Component {
    constructor(props){
        super(props);
    }
    
    search(e){
        e.preventDefault();
        this.props.dispatch(fetchMovieInfo(this.search))
            .then(id => this.props.dispatch(fetchMovieCast(id)))
    }

    render() {
        return (
            <form onSubmit={(e) => this.search(e)} className="search-form">
                <div className="search-movie-title">
                    <input type="text" name="movie-search" id="movie-search" placeholder="Search Movies" required/>
                    <button type="submit">submit</button>
                </div>
            </form>
        );
    }
}

// onClick={(e) => props.formSubmit(e.target.value)}

