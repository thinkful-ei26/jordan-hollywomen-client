import React, { Component } from 'react';
import { connect } from 'react-redux';

import DynamicModal from './dynamic-modal';
// import DynamicSearch from './dynamic-search';


const tvFeedback = (cast) => {
    if (cast.length === 0) {
        return 'Bummer! Cast information for this show is not available'
    }

    if (cast === null) {
        return alert('Invalid search. Perhaps you meant to search a different media type?')
    }

    const femaleNum = cast.filter(person => person.gender === 1).length;
    const roundedNum = Math.round(femaleNum * 100 / cast.length);
    const percentage = Math.round(roundedNum / 10) * 10;
    
    if (percentage === 100) {
        return 'Add to your favorites! This cast features all women!';
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
        return 'Decent... 40% female cast';
    }
    else if (percentage === 30) {
        return 'Better than nothing I guess. 30% female cast';
    }
    else if (percentage === 20) {
        return 'Not impressed. 20% female cast';
    }
    else if (percentage === 10) {
        return 'Wow, thanks. 10% female cast'
    }
    else if (percentage === 5) {
        return 'SUPER LAME! 5% female cast'
    }
    else {
        return 'No females present. Boo!';
    }
}

class DynamicFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cast: [],
            isLoaded: false,
            currentSearch: '',
            currentFeedback: '%',
            modalOpen: false,
            // searchHistory: []
        }
    }

    closeModal() {
        this.setState({
            modalOpen: false
        });
    }

    handleFormSubmit(results){
        this.setState({
            currentFeedback: tvFeedback(results),
            modalOpen: true
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
                <DynamicModal 
                    modalOpen={this.state.modalOpen}
                    feedback={this.state.currentFeedback}
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    closeModal={(e) => this.closeModal(e)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        cast: state.cast.cast || [],
        // searchHistory: state.searchHistory
    }
}

export default connect(mapStateToProps)(TvShow);