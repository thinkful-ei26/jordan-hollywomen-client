import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { fetchTvCast } from '../actions/tv-info';
import { fetchMovieCast } from '../actions/movie-info';

import './imagetitledisplay.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },

  };

Modal.setAppElement('#root')

class ComboModal extends Component {
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

    onTvClick(tvShow){
        this.props.dispatch(fetchTvCast(tvShow.id))
        .then(results => {
            this.props.tvFormSubmit(results.data.cast)
        })
        this.openModal()
    }

    onMovieClick(movie){
        this.props.dispatch(fetchMovieCast(movie.id))
        .then(results => {
            this.props.movieFormSubmit(results.data.cast)
        })
        this.openModal()
    }

    render() {
            //add on click to image, then dispatch an action that passes the movie id
            //then set up action to make a request with movie id

        let displayTvImagesAndTitles = this.props.tvList.map((tvShow, i, j, x) => {
            if (tvShow.poster_path) {
                return (
                    <div className="box" key={i}>
                        <img onClick={() => this.onTvClick(tvShow)} 
                            src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} 
                            alt="thumbnail"
                            key={j}/>
                        <li onClick={() => this.onTvClick(tvShow)} 
                            key={x}>{tvShow.name}
                        </li>  
                    </div>    
                )
            }
                return tvShow.backdrop_path
        })

        let displayMovieImagesAndTitles = this.props.movieList.map((movie, i, j, x) => {
            if (movie.poster_path) {
                return (
                    <div className="box" key={i}>
                        <img onClick={() => this.onMovieClick(movie)} 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt="thumbnail"
                            key={j}/>
                        <li onClick={() => this.onMovieClick(movie)} 
                            key={x}>{movie.title}
                        </li>  
                    </div>  
                )
            }
                return movie.backdrop_path
        })

        return (
            <div>
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
                {displayTvImagesAndTitles}
                {displayMovieImagesAndTitles}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        tvList: state.tvInfo.tvList,
        tvCastInfo: state.tvInfo.tvCastInfo,
        tvId: state.tvInfo.tvId,
        movieList: state.movieInfo.movieList,
        movieCastInfo: state.movieInfo.movieCastInfo,
        movieId: state.movieInfo.movieId,
        tvModalVisible: state.tvCast.tvModalVisible,
        movieModalVisible: state.movieCast.movieModalVisible

    }
};

export default connect(mapStateToProps)(ComboModal);