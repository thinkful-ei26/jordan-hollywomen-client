import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

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
    }
  };

Modal.setAppElement('#root')

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
        .then(results => {
            this.props.formSubmit(results.data.cast)})
        this.openModal()
    }

    render() {

        let displayImagesAndTitles = this.props.movieList.map((movie, i, j, x) => {
            if (movie.poster_path) {
                return (
                    <div className="box" key={i}>
                        <img onClick={() => this.onMovieClick(movie)} 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt="thumbnail"
                            key={j}/>
                        <p onClick={() => this.onMovieClick(movie)} 
                            key={x}>{movie.title}
                        </p>  
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
                {displayImagesAndTitles}
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