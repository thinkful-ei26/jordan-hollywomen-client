import React, { Component } from 'react';

import Header from './header';
import DynamicHistory from './dynamic-history';
import NavBar from './nav-bar';

import './search-history.css';


export default class History extends Component {

    render() {
        return (
            <div className="history">
                <div className="nav-display">
                    <Header />
                    <NavBar />
                    <DynamicHistory />
                </div>
            </div>
        )
    }
}
