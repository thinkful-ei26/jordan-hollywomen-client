import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

// import { fetchTvCast, fetchMovieCast } from '../actions/get-cast';
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
        movieSelected: false,
        clicked: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal(){
        this.subtitle.style.color = '#f442c2';
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalOpen}
                    display={(e) => this.dynamicDisplay(e)}
                    onAfterOpen={this.afterOpenModal}
                    style={customStyles}
                    contentLabel="Gender Score Card"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.feedback}</h2>
                    <button onClick={this.props.closeModal}>close</button>
                </Modal>
                <DynamicDisplay 
                    formSubmit={this.props.formSubmit}
                    isOpen={this.props.modalOpen}
                    display={(e) => this.dynamicDisplay(e)}
                    style={customStyles}
                    contentLabel="Gender Score Card"
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        tvList: state.info.tvList,
        tvCastInfo: state.info.tvCastInfo,
        tvModalVisible: state.cast.tvModalVisible,
        movieList: state.info.movieList,
        movieCastInfo: state.info.movieCastInfo,
        movieId: state.info.id,
        movieModalVisible: state.cast.movieModalVisible

    }
};

export default connect(mapStateToProps)(DynamicModal);