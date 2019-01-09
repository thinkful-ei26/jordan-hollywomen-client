import './search-form.css'
import React from 'react';

import DynamicFeedback from './dynamic-feedback';



export default function SearchForm(props) {
    return (
        <section className="search-form">
            <DynamicFeedback /> 
        </section>
    );
}

