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
        this.props.dispatch(fetchMovieInfo(this.movieSearchTerm.value))
    }

    render() {

        return (
            <div>
                <form className="search-form" onSubmit={(e) => this.search(e)}>
                    <div className="search-movie-title">
                        <input ref={(input) => this.movieSearchTerm = input} defaultValue="Godard" type="text" name="search-term" id="search-term" placeholder="Search Movies" required/>
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
