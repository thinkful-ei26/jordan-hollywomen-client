import React, { Component } from 'react';
import { fetchTvInfo, fetchMovieInfo } from '../actions/get-ids';

import { connect } from 'react-redux';
import './movie-search-form.css';

export class DynamicSearch extends Component {
//if first option selected dispatch one else dispatch the other

    search(e){
        e.preventDefault();
        if (this.tvOption.selected === true) {
            console.log('Option selected:', this.tvOption)
            alert("You've selected TV")
            this.props.dispatch(fetchTvInfo(this.searchTerm.value))
        }
        else if (this.movieOption.selected === true) {
            console.log('Option selected:', this.movieOption)
            alert("You've selected Movies")
            this.props.dispatch(fetchMovieInfo(this.searchTerm.value))
        }
    }

    render () {

        return (
        
            <div>
                <form className="search-form" onSubmit={(e) => this.search(e)}>
                    <div className="search-tv-title">
                        <input ref={(input) => this.searchTerm = input} type="text" name="search-term" id="search-term" placeholder="Search Tv or Movies" required/>
                        <select>
                            <option id="1" ref={(tvOption) => this.tvOption = tvOption} required>TV</option>
                            <option id="2" ref={(movieOption) => this.movieOption = movieOption} required>Movies</option>  
                        </select><br/>
                            <button type="submit">Search!!!</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tvList: state.info.tvList,
        tvCastInfo: state.info.tvCastInfo,
        movieList: state.info.movieList,
        movieCastInfo: state.info.movieCastInfo
    }
}

export default connect(mapStateToProps)(DynamicSearch);

// const OptionOne = React.forwardRef((props, ref) => (
//     <option ref={tvOption} className="option-one">
//         {props.children}
//     </option>
// ))

// const OptionTwo = React.forwardRef((props, ref) => (
//     <option ref={movieOption} className="option-two">
//         {props.children}
//     </option>
// ))

// const SelectOption = React.forwardRef((props, ref) => (
//     <select ref={selection}>
//         <OptionOne id="1" ref={tvOption} required>TV</OptionOne>
//         <OptionTwo id="2" ref={movieOption} required>Movies</OptionTwo> 
//     </select>
// ))

// const tvOption = React.createRef();
// const movieOption = React.createRef();
// const selection = React.createRef();