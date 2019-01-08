import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchTvCast, fetchMovieCast } from '../actions/get-cast';


import './imagetitledisplay.css';

export class DynamicDisplay extends Component {
    constructor() {
        super();

    this.state = {
        tvSubmit: false,
        movieSubmit: false
    };
    }

    submit(movie, tvShow){
        if (this.movieDisplay.selected === true){
            this.setState({
                movieSubmit: true,
            })
            this.props.dispatch(fetchMovieCast(movie.id))
            .then(results => {
                this.props.formSubmit(results.data.cast)})
        }
        else if (this.tvDisplay.selected === true){
            this.setState({
                tvSubmit: true,
            })
            this.props.dispatch(fetchTvCast(tvShow.id))
            .then(results => {
                this.props.formSubmit(results.data.cast)})
        }
    }

    clearSubmit(){
        this.setState({
            tvSubmit: false,
            movieSubmit: false
        })
    }


render() {
    //add on click to image, then dispatch an action that passes the movie id
    //then set up action to make a request with movie id

    // let tvImagesAndTitles = this.props.tvList.map((tvShow, i, j, x) => {
    //     if (tvShow.poster_path) {
    //         return (
    //             <div className="box" key={i}>
    //                 <img onClick={() => this.submit(tvShow)} 
    //                     src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} 
    //                     alt="thumbnail"
    //                     key={j}/>
    //                 <li key={x}>{tvShow.name}</li>  
    //             </div>    
    //         )
    //     }
    //         return tvShow.backdrop_path
    // })

    // let movieImagesAndTitles = this.props.movieList.map((movie, i, j, x) => {
    //     if (movie.poster_path) {
    //         return (
    //             <div className="box" key={i}>
    //                 <img onClick={() => this.submit(movie)} 
    //                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
    //                     alt="thumbnail"
    //                     key={j}/>
    //                 <li key={x}>{movie.title}</li>  
    //             </div>  
    //         )
    //     }
    //         return movie.backdrop_path
    // })

    let imagesAndTitles = this.props.movieList.map((movie, i, j, x) => {
        if (movie.poster_path) {
            return (
                <div className="box" key={i}>
                    <img onClick={() => this.submit(movie)} 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt="thumbnail"
                        key={j}/>
                    <li key={x}>{movie.title || movie.name}</li>  
                </div>  
            )
        }
            return movie.backdrop_path
    })

    return (
        <section className = "dynamic-display" onSubmit={() => this.submit()}>
            <div ref={(movie) => this.movieDisplay = movie} onSubmit={() => this.clearSubmit()}>
                {imagesAndTitles}
            </div>
            {/* <div ref={(tv) => this.tvDisplay = tv} onSubmit={() => this.clearSubmit()}>
                {tvImagesAndTitles}
            </div> */}
        </section>
    );
}
}

const mapStateToProps = (state) => {
    return {
        // tvList: state.tvInfo.tvList,
        // tvCastInfo: state.tvInfo.tvCastInfo,
        // tvId: state.tvInfo.tvId,
        // tvModalVisible: state.tvCast.tvModalVisible,
        movieList: state.info.movieList,
        movieCastInfo: state.info.movieCastInfo,
        movieId: state.info.movieId,
        movieModalVisible: state.cast.movieModalVisible

    }
};

export default connect(mapStateToProps)(DynamicDisplay);
    