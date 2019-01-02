import './search-form.css'

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MovieSearchSection extends Component {

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

export default MovieSearchSection;


