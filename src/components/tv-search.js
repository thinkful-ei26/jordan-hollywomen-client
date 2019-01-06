import React from 'react';

import TvSearchForm from './tv-search-form';

export default function TvSearchSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <TvSearchForm 
                tvSearchInput={(e) => props.searchInput(e)}
                tvFormSubmit={(e) => props.formSubmit(e)}
                history={(e) => props.history(e)}
            />
            <h3 id="history">{props.searchHistory}</h3>

        </section>
    );
}

