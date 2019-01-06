import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { fetchTvCast } from '../actions/tv-info';

import './movie-modal.css';

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

class TvModal extends Component {
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
        console.log('here i am', tvShow)
        this.props.dispatch(fetchTvCast(tvShow.id))
        .then(results => {
            console.log('WHAT AM I', results)
            this.props.tvFormSubmit(results.data.cast)
        })
        this.openModal()
    }

    render() {
            //add on click to image, then dispatch an action that passes the movie id
            //then set up action to make a request with movie id

        let images = this.props.tvList.map((tvShow, i) => {
            if (tvShow.poster_path) {
                return (
                    <img onClick={() => this.onTvClick(tvShow)} 
                        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} 
                        alt="thumbnail"
                        key={i}/>
                )
            }
                return tvShow.backdrop_path
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
                {images}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        tvList: state.tvInfo.tvList,
        castInfo: state.tvInfo.castInfo,
        tvId: state.tvInfo.tvId,
        modalVisible: state.tvCast.modalVisible
    }
};

export default connect(mapStateToProps)(TvModal);