import './header.css'

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {

    render(){
        return (
            <div className="Header">
                <header className="App-header">
                    <h1>HollyWomen</h1>
                </header>
            </div>
        );
    }
}

export default Header;


