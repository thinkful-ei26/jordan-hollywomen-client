import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchTvCast, fetchMovieCast } from '../actions/get-cast';
import DynamicSearch from './dynamic-search';

import './imagetitledisplay.css';

export class DynamicDisplay extends Component {
    constructor() {
        super();

    this.state = {
        submit: false,
        imageClicked: false,
        optionSelected: 0,
    };
    }

    tvOption(ref) {
        ref.focus();
    }

    movieOption(ref) {
        ref.focus();
    }

    submit(tvOrMovie, id){
        if (tvOrMovie === 'movie'){
            this.setState({
                imageClicked: this.currentImage.image,
                submit: true,
            })
            this.props.dispatch(fetchMovieCast(id))
            .then(results => {
            this.props.formSubmit(results.data.cast)
            })
        }

        else if (tvOrMovie === 'tv'){
            this.setState({
                imageClicked: this.currentImage.image,
                submit: true,
            })
            this.props.dispatch(fetchTvCast(id))
            .then(results => {
            this.props.formSubmit(results.data.cast)
            })
        }
    }

    clearSubmit(){
        this.setState({
            submit: false,
        })
    }

    clearHistory(){
        this.setState({
            searchHistory: [],
        })
    }
    
render() {

    let imagesAndTitles = this.props.movieList.map((title, i, j, x) => {
        if (title.poster_path) {
            const tvOrMovie = title.title ? 'movie' : 'tv'
            return (
                <div className="box" key={i}>
                    <img onClick={() => this.submit(tvOrMovie, title.id)} 
                        src={`https://image.tmdb.org/t/p/w500${title.poster_path}`} 
                        alt="thumbnail"
                        key={j}/>
                    <li key={x}>{title.title || title.name}</li>  
                </div>  
            )
        }
            return title.backdrop_path
    })

    return (
        <section className = "dynamic-display" onSubmit={() => this.submit()}>
            <div className="display" ref={(image) => this.currentImage = image} onSubmit={() => this.clearSubmit()}>
                {imagesAndTitles}
            </div>
            <DynamicSearch 
                tvOption={this.tvOption}
                movieOption={this.movieOption}
            />
            {/* <DynamicHistory /> */}
        </section>
    );
}
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        castInfo: state.info.castInfo,
        movieList: state.info.movieList,
        movieId: state.info.movieId,
        recentSearches: state.history.recentSearches,
    }
};

export default connect(mapStateToProps)(DynamicDisplay);
    