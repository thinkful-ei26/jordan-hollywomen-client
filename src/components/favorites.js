import React, { Component } from 'react';

import Header from './header';
import NavBar from './nav-bar';

import './search-history.css';


export default class Favorites extends Component {

    render() {

        let searches = this.props.recentSearches.map(
            (searchTerm, i, x) => (
            <div className="history" key={i}>
                <li key={x}>
                    {searchTerm.searchTerm}
                </li>
            </div>
        ));

        const count = 0;

        const termSearch = () => {
            for (let i = 0; i < searches.length; i++){
                console.log('term:', this.searches.searchTerm[i])
                let regx = new RegExp("\\b" + this.searches.searchTerm[i].toLowercase() + "\\b");
                let found = searches.toLowercase().match(regx);
                console.log("found:", found)
                if(found){
                    this.count = count + found.length;
                }
                console.log("count:", this.count)
            }
        }

        const termFrequencyResults = () => {
            let algo = count / searches.length
            if(algo*termSearch > 0) {
                return searches
            }
            console.log('results:', termFrequencyResults)
        }  


        return (
            <section className="favorites">
                <div className="nav-display">
                    <NavBar />
                    <Header />
                </div>
            </section>
        )
    }
}
