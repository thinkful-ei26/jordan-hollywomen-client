import React, { Component } from 'react';
import { fetchMovieInfo } from '../actions/get-movie-id';
// import { fetchMovieCast } from '../actions/movie-info';
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
            // .then(() => {
            //     this.props.dispatch(fetchMovieCast(this.props.movieId))})
    }

    // onMovieClick(){
    //     this.props.dispatch(fetchMovieCast(this.props.movieId))
    // }

    render() {

        // let singleId = this.props.castInfo.map(image => {
        //     return image.id
        // })

        // let images = this.props.movieList.map(movie => {
        //     return (
        //         <img onClick={() => (this.onMovieClick())} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='thumbnail'/>
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
        movieList: state.movieInfo.movieList,
        castInfo: state.movieInfo.castInfo
    }
}

export default connect(mapStateToProps)(MovieSearchForm);


// onClick={(e) => this.formSubmit(e.target.value)}
// {`${API_BASE_URL}/movie/${movieId}`}