import React, { Component } from 'react';
import TvSearchSection from './tv-search';
import { connect } from 'react-redux';
import TvModal from './tv-modal';

const tvFeedback = (tvShowCast) => {
    console.log('this is the cast', tvShowCast)
    if (tvShowCast.length === 0) {
        return 'Cast information for this show is not available'
    }
    const femaleNum = tvShowCast.filter(person => person.gender === 1).length;
    const roundedNum = Math.round(femaleNum * 100 / tvShowCast.length);
    const percentage = Math.round(roundedNum / 10) * 10;
    
    if (percentage === 100) {
        return 'DOPE! This Tv Show features all women!';
    }
    else if (percentage === 90) {
        return '90% female cast, hell yeah!';
    }
    else if (percentage === 80) {
        return '80% female cast, awesome!';
    }
    else if (percentage === 70) {
        return '70% female cast, pretty great!';
    }
    else if (percentage === 60) {
        return '60% female cast,!'
    }
    else if (percentage === 50) {
        return 'Yin and Yang. 50% Female, 50% Male'
    }
    else if (percentage === 40) {
        return '40% female cast';
    }
    else if (percentage === 30) {
        return '30% female cast';
    }
    else if (percentage === 20) {
        return '20% female cast';
    }
    else if (percentage === 10) {
        return '10% female cast'
    }
    else if (percentage === 5) {
        return '5% female cast'
    }
    else {
        return 'No females present. Boo!';
    }
}

class TvShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvShowCast: [],//dynamic 
            isLoaded: false,
            currentSearch: '',
            currentFeedback: '%',
            searchHistory: [], //make dynamic
        }
    }

    //submit a tv show
    handleFormSubmit(results){
        this.setState({
            currentFeedback: tvFeedback(results)
        })
    };

    handleSearchHistory(){
        this.setState({
            searchHistory: [...this.state.searchHistory, this.state.currentSearch]
        })
    };

    handleCurrentSearch(e){
        this.setState({
            currentSearch: e
        })
    };

    render() {
        return (
            <div>
                <TvSearchSection
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    search={(e) => this.handleCurrentSearch(e)}
                    history={(e) => this.handleSearchHistory(e)}
                />
                <TvModal 
                    feedback={this.state.currentFeedback}
                    formSubmit={(e) => this.handleFormSubmit(e)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tvShowCast: state.tvCast.cast || [],
        searchHistory: state.searchHistory
    }
}

export default connect(mapStateToProps)(TvShow);