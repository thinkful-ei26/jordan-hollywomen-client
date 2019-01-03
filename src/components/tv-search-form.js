import React from 'react';
// import { connect } from 'react-redux';

export default function TvSearchForm(props) {
        return (
            <form className="search-form">
                <div className="search-tv-title">
                    <input onClick={(e) => props.formSubmit(e.target.value)} type="text" name="tv-search" id="tv-search" placeholder="Search TV Shows" required/>
                    <button type="submit">submit</button>
                </div>
            </form>
        );
}


