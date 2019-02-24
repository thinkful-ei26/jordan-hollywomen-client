import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchAddHistory } from '../actions/add-history';
import { fetchTvInfo, fetchMovieInfo } from '../actions/graphql';

import './imagetitledisplay.css';

export class DynamicDisplay extends Component {
    constructor() {
        super();

    this.state = {
        searchTerm: '',
        submit: false,
        imageClicked: false,
    };
  }

    tvOption(ref) {
        ref.focus();
    }

    movieOption(ref) {
        ref.focus();
    }

    submit(e){
        const searchTerm = this.searchTerm.value;

        if (this.tvOption.selected === true){
            this.setState({
                imageClicked: this.currentImage.image,
                submit: true,
                searchTerm: searchTerm
            })
            this.props.dispatch(fetchTvInfo(searchTerm))
            .then(results => {
                console.log(results)
            this.props.formSubmit(results)
            })
        }

        else if (this.movieOption.selected === true){
            this.setState({
                imageClicked: this.currentImage.image,
                submit: true,
                searchTerm: searchTerm
            })
            this.props.dispatch(fetchMovieInfo(searchTerm))
            .then(results => {
            this.props.formSubmit(results)
            })
        }
        this.props.dispatch(fetchAddHistory(searchTerm))
        console.log('current target:', e.currentTarget.id)
        return e.currentTarget.id
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

    const tv = this.props.tvData.map(title => title);
    const movie = this.props.movieData.map(title => title);
    const data = this.tvOption.selected === true ? tv : movie;

    let imagesAndTitles = data.map((title, i, j, x) => {
        if (title.poster_path) {
            // const tvOrMovie = title.title ? 'movie' : 'tv'
            return (
                <div className="box" key={i}>
                    <img onClick={(title) => this.submit(title)}
                        src={`https://image.tmdb.org/t/p/w500${title.poster_path}`} 
                        alt="thumbnail"
                        id={title.id}
                        key={j}/>
                    <li key={x}>{title.title || title.name}</li>  
                </div>  
            )
        }
            return null
    })

    return (
        <section className = "dynamic-display" onSubmit={(e) => e.preventDefault()}>
            <div>
                <form className="search-form" onSubmit={(e) => this.submit(e)}>
                    <div className="search-tv-title">
                        <input ref={(input) => this.searchTerm = input} type="text" name="search-term" id="search-term" placeholder="Search Tv or Movies" required/>
                        <select>
                            <option id="1" ref={(tvOption) => this.tvOption = tvOption} required>TV</option>
                            <option id="2" ref={(movieOption) => this.movieOption = movieOption} required>Movies</option>  
                        </select><br/>
                            <button type="submit">Search</button><br/><br/>
                    </div>
                </form>
                <div className="display" ref={(image) => this.currentImage = image} onSubmit={() => this.clearSubmit()}>
                        {imagesAndTitles}
                </div>
            </div>
        </section>
    );
}
}
 
const mapStateToProps = (state) => {
    return {
        tvData: state.graphql.searchTerm.tv || [],
        movieData: state.graphql.searchTerm.movie || [],
        recentSearches: state.history.recentSearches,
    }
};

export default connect(mapStateToProps)(DynamicDisplay);
    