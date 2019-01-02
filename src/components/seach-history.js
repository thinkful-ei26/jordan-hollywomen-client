import React from 'react';

import './search-history.css';

export default function SearchHistory(props) {
    const searches = props.searches.map((search, index) => (
        <li key={index}>
            {search}
        </li>
    ));
    console.log(searches.search)
    return (
        <ul id="searchHistory" className="searchBox clearfix">
            {searches}
        </ul>
    );
};
