import React, { Component } from 'react';

import Header from './header';
import NavBar from './nav-bar';

import './search-history.css';


export default class Favorites extends Component {

    render() {
        return (
            <section className="history">
                <div className="nav-display">
                    <NavBar />
                    <Header />
                </div>
            </section>
        )
    }
}
