import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

// import { fetchMovieInfo } from '../actions/get-movie-id';
import { fetchMovieCast } from '../actions/movie-info';

import './movie-modal.css';
// import MovieSearchForm from './movie-search-form';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class MovieModal extends Component {
    constructor() {
        super();

    this.state = {
        modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal(){
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    onMovieClick(movie){
            this.props.dispatch(fetchMovieCast(movie.id))
        // console.log('im clicked', e.currentTarget.src)
        // let imageId = this.props.movieList.map(movie => {
        //     if (movie.poster_path === e.currentTarget.src) {
        //         return movie.id
        //     }
        //     // return movie.id
        // })
        // console.log(imageId)
        // this.props.dispatch(fetchMovieCast(this.props.movieId))
    }

    // search(e){
    //     e.preventDefault();
    //     console.log(this.searchTerm.value)
    //         this.props.dispatch(fetchMovieInfo(this.searchTerm.value))
    //         .then(id => {
    //             this.props.dispatch(fetchMovieCast(id))})
    // }

    render() {
            //add on click to image, then dispatch an action that passes the movie id
            //then set up action to make a request with movie id
        let images = this.props.movieList.map((movie, i) => {
            return (
                // <label for="img">movie.title</label>
                <img onClick={() => this.onMovieClick(movie)} 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt="thumbnail"
                    key={i}
                    random={i}/>
            )
        })

        // let movieTitle = images.map(image => {
        //     return (image.title)
        // })
        console.log(this.props.modalVisible)
        return (
            <div>
                {this.props.modalVisible ? 'Show modal!' : ''}
                <button onClick={this.openModal}>View Film Score</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Gender Score Card"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.feedback}</h2>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
                {images}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        movieList: state.movieInfo.movieList,
        castInfo: state.movieInfo.castInfo,
        movieId: state.movieInfo.movieId,
        modalVisible: state.movieCast.modalVisible
    }
};

export default connect(mapStateToProps)(MovieModal);