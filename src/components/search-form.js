import './search-form.css'
import React from 'react';

// import ComboForm from './redux-form-test';
// import Selector from './selector'
import TvShow from './tv-show';
// import Movie from './movie';



export default function SearchForm(props) {
    return (
        <section className="search-form">
            {/* <Selector /><br/><br/> */}
            {/* <ComboForm
            searchInput={(e) => props.searchInput(e)}
            formSubmit={(e) => props.formSubmit(e)}
            /> */}
            <TvShow /> 
            {/* <Movie /> */}
        </section>
    );
}

