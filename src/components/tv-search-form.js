import React, { Component } from 'react';
import { fetchTvInfo } from '../actions/get-tv-id';
import { connect } from 'react-redux';
import './movie-search-form.css';


// import { connect } from 'react-redux';

export class TvSearchForm extends Component {

    search(e){
        e.preventDefault();
        this.props.dispatch(fetchTvInfo(this.searchTerm.value))
    }

    render () {

        return (
            <form className="search-form" onSubmit={(e) => this.search(e)}>
                <div className="search-tv-title">
                <input ref={(input) => this.searchTerm = input} defaultValue="Family Guy" type="text" name="search-term" id="search-term" placeholder="Search Movies" required/>
                    <button type="submit">Search TV Shows</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tvList: state.tvInfo.tvList,
        castInfo: state.tvInfo.castInfo
    }
}

export default connect(mapStateToProps)(TvSearchForm);

