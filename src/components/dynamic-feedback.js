import React, { Component } from 'react';
import { connect } from 'react-redux';

import DynamicModal from './dynamic-modal';

class DynamicFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFeedback: '%',
            modalOpen: false,
        }
    }

    tvFeedback(){
    
        const tvCast = this.props.tv.map(item => item.cast);
        const movieCast = this.props.movie.map(item => item.cast);

        console.log('tvCast:', tvCast)

        const tvGender = tvCast.map(item => item.gender);
        const movieGender = movieCast.map(item => item.gender);

        // const deeperTv = tvGender.map(item => item.gender)

        console.log('tvGender:', tvGender.gender)

        let gender = tvGender || movieGender

        console.log('tvCast:', tvCast.gender)


             { 
            if (gender.length === 0) {
                return 'Bummer! Cast information for this show is not available'
            }
        
            if (gender === null) {
                return alert('Invalid search. Perhaps you meant to search a different media type?')
            }
        
            let femaleNum;
            if (gender === '2'){
                femaleNum = gender
            }
            const roundedNum = Math.round(femaleNum * 100 / gender.length);
            const percentage = Math.round(roundedNum / 10) * 10;

            console.log('female num:', femaleNum)
            
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
    }

    closeModal() {
        this.setState({
            modalOpen: false
        });
    }

    handleFormSubmit(results){
        this.setState({
            currentFeedback: this.tvFeedback(results),
            modalOpen: true
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
    console.log('state:', state)
    return {
        tv: state.graphql.tvData || [],
        movie: state.graphql.movieData || [],
        recentSearches: state.history.recentSearches,
    }
}

export default connect(mapStateToProps)(DynamicFeedback);