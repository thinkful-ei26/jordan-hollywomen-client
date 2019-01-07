import React from 'react';

import MovieSearchForm from './movie-search-form';

export default function MovieSearchSection(props) {
    return (
        <section>
            <MovieSearchForm
                searchInput={(e) => props.searchInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
                history={(e) => props.history(e)}
            />
            <h3 id="history">{props.searchHistory}</h3>
        </section>
    );
}

