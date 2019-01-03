//get cast data and get the percentage

import React, { Component } from 'react';
import MovieSearchSection from './movie-search';
// import SearchHistory from './search-history';
import { connect } from 'react-redux';

const movieFeedback = (cast) => {
    if (cast.length === 0) {
        return 'No cast present'
    }
    const femaleNum = cast.filter(person => person.gender === 1).length;
    const roundedNum = Math.round(femaleNum * 100 / cast.length);
    const percentage = Math.round(roundedNum / 10) * 10;
    
    // console.log('Movie percentage:', percentage)

    if (percentage === 100) {
        return 'DOPE! This movie features all women!';
    }
    else if (percentage === 90) {
        return '90% female cast, hell yeah!';
    }
    else if (percentage === 80) {
        return '80% female cast, hell yeah!';
    } 
    else if (percentage === 70) {
        return '70% female cast, pretty great!';
    }
    else if (percentage === 60) {
        return '60% female cast, still dominating!'
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
            currentFeedback: 'Movie Gender Score: %',
            searchHistory: [], //make dynamic
        }
    }

    //submit a tv show
    handleFormSubmit(){
        this.setState({
            currentFeedback: movieFeedback(this.state.currentSearch)
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
        // console.log(movieFeedback(this.props.cast))
        return (
            <div>
                <MovieSearchSection
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    searchInput={(e) => this.handleCurrentSearch(e)}
                    history={(e) => this.handleSearchHistory(e)}
                    feedback={this.state.currentFeedback}
                />
                {/* <SearchHistory searches={this.state.searchHistory} /> */}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        cast: state.movieCast.movieInfo.cast || []
    }
}

export default connect(mapStateToProps)(Movie);