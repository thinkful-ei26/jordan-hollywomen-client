import React from 'react';

import DynamicSearchForm from './dynamic-search';

export default function SearchSection(props) {
    return (
        <section>
            <DynamicSearchForm
                searchInput={(e) => props.searchInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
            />
            {/* <h3 id="history">{props.searchHistory}</h3> */}

        </section>
    );
}

