import React from 'react';

import TvSearchForm from './tv-search-form';

export default function TvSearchSection(props) {
    return (
        <section>
            <TvSearchForm 
                searchInput={(e) => props.searchInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
            />
            {/* <h3 id="history">{props.searchHistory}</h3> */}

        </section>
    );
}

