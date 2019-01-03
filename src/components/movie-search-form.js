import React, { Component } from 'react';
import { fetchMovieInfo } from '../actions/get-movie-id';
import { fetchMovieCast } from '../actions/movie-info';
import { connect } from 'react-redux';
// import { API_BASE_URL } from '../config.js';
import './movie-search-form.css';

export class MovieSearchForm extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    search(e){
        e.preventDefault();
        console.log(this.searchTerm.value)
            this.props.dispatch(fetchMovieInfo(this.searchTerm.value))
            .then(id => {
                this.props.dispatch(fetchMovieCast(id))})
    }

    render() {

        // let singleId = this.props.castInfo.map(image => {
        //     return image.id
        // })

        // let images = this.props.movieList.map(movie => {
        //     return (
        //         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        //     )
        // })

        return (
            <div>
                <form className="search-form" onSubmit={(e) => this.search(e)}>
                    <div className="search-movie-title">
                        <input ref={(input) => this.searchTerm = input} defaultValue="godard" type="text" name="search-term" id="search-term" placeholder="Search Movies" required/>
                        <button type="submit">Search Films</button>
                    </div>
                </form>
                 {/* {images} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieId.movieList,
        castInfo: state.movieId.castInfo
    }
}

export default connect(mapStateToProps)(MovieSearchForm);


// onClick={(e) => this.formSubmit(e.target.value)}
// {`${API_BASE_URL}/movie/${movieId}`}