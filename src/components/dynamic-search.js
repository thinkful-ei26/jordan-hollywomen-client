import React, { Component } from 'react';
import { fetchTvInfo, fetchMovieInfo } from '../actions/get-ids';
import { fetchAddHistory } from '../actions/add-history';

import { connect } from 'react-redux';

import './search-form.css';

export class DynamicSearch extends Component {
//if first option selected dispatch one else dispatch the other

    search(e){
        e.preventDefault();
        const searchTerm = this.searchTerm.value
        if (this.tvOption.selected === true) {
            this.props.dispatch(fetchTvInfo(searchTerm))
        }
        else if (this.movieOption.selected === true) {
            this.props.dispatch(fetchMovieInfo(searchTerm))
        }
        this.props.dispatch(fetchAddHistory(searchTerm))
    }

    render () {

        return (
        
            <div>
                <form className="search-form" onSubmit={(e) => this.search(e)}>
                    <div className="search-tv-title">
                        <label id="search-label" for="search-term">Enter your search: </label>
                        <input ref={(input) => this.searchTerm = input} type="text" name="search-term" id="search-term" placeholder="Search Tv or Movies" required/>
                        <select id="search-select">
                            <option id="1" ref={(tvOption) => this.tvOption = tvOption} required>TV</option>
                            <option id="2" ref={(movieOption) => this.movieOption = movieOption} required>Movies</option>  
                        </select><br/>
                            <button id="search-button" type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tvList: state.info.tvList,
        tvCastInfo: state.info.tvCastInfo,
        movieList: state.info.movieList,
        movieCastInfo: state.info.movieCastInfo,
    }
}

export default connect(mapStateToProps)(DynamicSearch);
