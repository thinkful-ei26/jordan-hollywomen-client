import React from 'react';

import MovieSearchForm from './movie-search-form';

import './search-form.css';

export default function MovieSearchSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <MovieSearchForm
                searchInput={(e) => props.searchInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
                history={(e) => props.history(e)}
            />
        </section>
    );
}

