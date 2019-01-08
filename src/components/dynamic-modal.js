import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { fetchTvCast, fetchMovieCast } from '../actions/get-cast';
import DynamicDisplay from './dynamic-display';

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

class DynamicModal extends Component {
    constructor() {
        super();

    this.state = {
        modalIsOpen: false,
        tvSelected: false,
        movieSelected: false
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
            this.props.formSubmit(results.data.cast)
        })
        this.openModal()
    }

    onMovieClick(movie){
        this.state({
            movieSelected: true
        })
        this.props.dispatch(fetchMovieCast(movie.id))
        .then(results => {
            this.props.formSubmit(results.data.cast)
        })
        this.openModal()
    }

    render() {
            //add on click to image, then dispatch an action that passes the movie id
            //then set up action to make a request with movie id

        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    display={(e) => this.dynamicDisplay(e)}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Gender Score Card"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.feedback}</h2>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
                <DynamicDisplay />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        tvList: state.info.tvList,
        tvCastInfo: state.info.tvCastInfo,
        tvId: state.info.tvId,
        tvModalVisible: state.cast.tvModalVisible,
        movieList: state.info.movieList,
        movieCastInfo: state.info.movieCastInfo,
        movieId: state.info.movieId,
        movieModalVisible: state.cast.movieModalVisible

    }
};

export default connect(mapStateToProps)(DynamicModal);