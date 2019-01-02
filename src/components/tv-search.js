import React from 'react';

import TvSearchForm from './tv-search-form';

import './search-form.css';

export default function TvSearchSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <TvSearchForm 
                searchInput={(e) => props.searchInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
                history={(e) => props.history(e)}
            />
        </section>
    );
}

