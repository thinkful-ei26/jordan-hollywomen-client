import React, { Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

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

Modal.setAppElement()

class DynamicModal extends Component {
    constructor() {
        super();

    this.state = {
        modalIsOpen: false,
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
        tvData: state.graphql.searchTerm.tv || [],
        movieData: state.graphql.searchTerm.movie || [],
        recentSearches: state.history.recentSearches,
    }
};

export default connect(mapStateToProps)(DynamicModal);