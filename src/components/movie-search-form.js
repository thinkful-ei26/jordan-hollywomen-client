import React, { Component } from 'react';
import { fetchMovieInfo } from '../actions/get-movie-id';
import { fetchMovieCast } from '../actions/movie-info';
import { connect } from 'react-redux';
import './movie-search-form.css';

export class MovieSearchForm extends Component {
    constructor(props){
        super(props);
    }
    
    search(e){
        e.preventDefault();
        console.log(this.searchTerm.value)
            this.props.dispatch(fetchMovieInfo(this.searchTerm.value))
            .then(id => {
                // console.log(id)
                this.props.dispatch(fetchMovieCast(id))})
    }

    render() {
        console.log(this.props.movieList)
        let images = this.props.movieList.map(movie => {
            return (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            )
        })
        return (
            <div>
                <form className="search-form" onSubmit={(e) => this.search(e)}>
                    <div className="search-movie-title">
                        <input ref={(input) => this.searchTerm = input} defaultValue="breathless" type="text" name="search-term" id="search-term" placeholder="Search Movies" required/>
                        <button type="submit">submit</button>
                    </div>
                </form>
            {images}   
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieId.movieList
    }
}

export default connect(mapStateToProps)(MovieSearchForm);


// onClick={(e) => this.formSubmit(e.target.value)}
