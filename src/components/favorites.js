import React, { Component } from 'react';
import Header from './header';
import NavBar from './nav-bar';
import DynamicFavorites from './dynamic-favorites';

import './search-history.css';


export default class Favorites extends Component {

    render() {
        return (
            <section className="favorites">
                <div className="nav-display">
                    <Header />
                    <NavBar />
                    <DynamicFavorites />
                </div>
            </section>
        )
    }
}
