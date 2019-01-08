import './search-form.css'
// import TvShow from './tv-show';
// import Movie from './movie';
import React from 'react';
import Selector from './selector'

export default function SearchForm() {
    return (
        <section className="search-form">
            <Selector /><br/><br/>
            {/* <TvShow /> */}
            {/* <Movie /> */}
        </section>
    );
}

