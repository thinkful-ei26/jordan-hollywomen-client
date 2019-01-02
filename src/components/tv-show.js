//get cast data and get the percentage

import React, { Component } from 'react';
import TvSearchSection from './tv-search';
import { connect } from 'react-redux';

// import { API_BASE_URL } from '../config.js';


const tvFeedback = (cast) => {
    if (cast.length === 0) {
        return 'No cast present'
    }
    const femaleNum = cast.filter(person => person.gender === 1).length;
    const roundedNum = Math.round(femaleNum * 100 / cast.length);
    const percentage = Math.round(roundedNum / 10) * 10;
    
    console.log('this is the TV percentage', percentage)

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
            cast: [],//dynamic 
            isLoaded: false,
            currentSearch: '',
            currentFeedback: 'Get Your TV Gender Score!',
            searchHistory: [], //make dynamic
        }
    }

    // componentDidMount() {
    //     fetch(`${API_BASE_URL}/tv/:id}`)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             cast: result.cast
    //           });
    //         },
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }

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
        // const { error, isLoaded, items } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
            console.log(tvFeedback(this.props.cast))
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

const mapStateToProps = (state) => {
    return {
        cast: state.tv.tvInfo.cast || []
    }
}

export default connect(mapStateToProps)(TvShow);