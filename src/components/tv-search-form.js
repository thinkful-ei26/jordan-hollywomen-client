import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class TvSearchForm extends Component {

    render(){
        return (
                    <form className="search-form">
                        <div className="search-tv-title">
                            <input type="text" placeholder="Enter A TV Show Here"/>
                            <button type="submit">submit</button>
                        </div>
                    </form>
        );
    }
}

export default TvSearchForm;


