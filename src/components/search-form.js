import './search-form.css'
import TvShow from './tv-show';
import Movie from './movie';
import React from 'react';

export default function SearchForm(props) {
    return (
        <section className="search-form">;
        <TvShow />
        <Movie />
            <h2 id="feedback">{props.feedback}</h2>
        </section>
    );
}

