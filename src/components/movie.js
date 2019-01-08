import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieModal from './movie-modal';
import MovieSearchSection from './movie-search';
// import ComboForm from './redux-form-test';
// import ComboModal from './combo-modal';


const movieFeedback = (cast) => {
    console.log('this is the cast', cast)
    if (cast.length === 0) {
        return 'Bummer! Cast information for this film is not available'
    }
    const femaleNum = cast.filter(person => person.gender === 1).length;
    const roundedNum = Math.round(femaleNum * 100 / cast.length);
    const percentage = Math.round(roundedNum / 10) * 10;
    
    if (percentage === 100) {
        return 'DOPE! This movie features all women!';
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
        return '60% female cast!'
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

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cast: [],
            isLoaded: false,
            currentSearch: '',
            currentFeedback: '%',
            // searchHistory: []
        }
    }

    handleFormSubmit(results){
        this.setState({
            currentFeedback: movieFeedback(results)
        })
    };

    // handleSearchHistory(){
    //     this.setState({
    //         searchHistory: [...this.state.searchHistory, this.state.currentSearch]
    //     })
    // };

    handleCurrentSearch(e){
        this.setState({
            currentSearch: e
        })
    };

    render() {
        return (
            <div>
                <MovieSearchSection
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    searchInput={(e) => this.handleCurrentSearch(e)}
                    history={(e) => this.handleSearchHistory(e)}
                />
                {/* <ComboForm
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    searchInput={(e) => this.handleCurrentSearch(e)}
                /> */}
                <MovieModal 
                    feedback={this.state.currentFeedback}
                    formSubmit={(e) => this.handleFormSubmit(e)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cast: state.movieCast.cast || [],
        searchHistory: state.searchHistory
    }
}

export default connect(mapStateToProps)(Movie);