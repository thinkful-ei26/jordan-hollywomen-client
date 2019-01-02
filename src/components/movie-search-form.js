import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class MovieSearchForm extends Component {

    render(){
        return (
                    <form className="search-form">
                        <div className="search-movie-title">
                            <input type="text" placeholder="Enter A Movie Here"/>
                            <button type="submit">submit</button>
                        </div>
                    </form>
        );
    }
}

export default MovieSearchForm;


