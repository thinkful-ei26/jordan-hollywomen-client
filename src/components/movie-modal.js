import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { fetchMovieInfo } from '../actions/get-movie-id';
import { fetchMovieCast } from '../actions/movie-info';

import './movie-modal.css';
import MovieSearchForm from './movie-search-form';

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
  
//   // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement(MovieSearchForm)

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

    search(e){
        e.preventDefault();
        console.log(this.searchTerm.value)
            this.props.dispatch(fetchMovieInfo(this.searchTerm.value))
            .then(id => {
                this.props.dispatch(fetchMovieCast(id))})
    }

    render() {

        let images = this.props.movieList.map(movie => {
            return (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            )
        })

        return (
            <div>
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
        movieList: state.movieId.movieList,
        castInfo: state.movieId.castInfo
    }
}

export default connect(mapStateToProps)(MovieModal);