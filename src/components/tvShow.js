//get cast data and get the percentage

import React, { Component } from 'react';
import TvSearchSection from './tv-search';

const tvFeedback = (cast, gender) => {
    const percentage = Math.abs(cast.length / gender);

    if (percentage === 100) {
        return 'DOPE! This Tv Show features all women!';
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

class TvShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cast: [
                {gender: 2},
            ],
            currentSearch: 34549,
            currentFeedback: 'Get Your TV Gender Score!',
            searchHistory: [], //make dynamic
        }
    }

    //submit a tv show
    handleFormSubmit(){
        this.setState({
            score: this.state.score,
            currentFeedback: tvFeedback(this.state.currentSearch)
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
                    feedback={this.state.currentFeedback}
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    searchInput={(e) => this.handleCurrentSearch(e)}
                    history={(e) => this.handleSearchHistory(e)}
                />
            </div>
        );
    }

}

export default TvShow;