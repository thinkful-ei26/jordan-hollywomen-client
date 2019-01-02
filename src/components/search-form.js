import './search-form.css'
import TvShow from './tv-show';
import Movie from './movie';
import React from 'react';

export default function SearchForm(props) {
    return (
        <section class="search-form">
            <h2 id="feedback">{props.feedback}</h2>
            <TvShow />
            <Movie />
        </section>
    );
}

