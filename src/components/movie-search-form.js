import React, { Component } from 'react';
import { fetchMovieInfo } from '../actions/get-movie-id';
import { connect } from 'react-redux';
import './movie-search-form.css';

export class MovieSearchForm extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    search(e){
        e.preventDefault();
        this.props.dispatch(fetchMovieInfo(this.searchTerm.value))
    }

    render() {

        return (
            <div>
                <form className="search-form" onSubmit={(e) => this.search(e)}>
                    <div className="search-movie-title">
                        <input ref={(input) => this.searchTerm = input} defaultValue="Godard" type="text" name="search-term" id="search-term" placeholder="Search Movies" required/>
                        <button type="submit">Search Films</button>
                    </div>
                </form>
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