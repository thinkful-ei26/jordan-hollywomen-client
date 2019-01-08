import React from 'react';

import MovieSearchForm from './movie-search-form';

export default function MovieSearchSection(props) {
    return (
        <section>
            <MovieSearchForm
                searchInput={(e) => props.searchInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
            />
        </section>
    );
}

