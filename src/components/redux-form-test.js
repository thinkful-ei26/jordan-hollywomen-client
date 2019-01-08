// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';

// import MovieSearchForm from './movie-search-form';
// import TvSearchForm from './tv-search-form';
// import { fetchMovieInfo } from '../actions/get-movie-id';
// import { fetchTvInfo } from '../actions/get-tv-id';

// export class ComboForm extends Component {

//     search(e){
//         e.preventDefault();
//         this.props.dispatch(fetchMovieInfo(this.movieSearchTerm.value))
//         this.props.dispatch(fetchTvInfo(this.tvSearchTerm.value))
//     }

//     render() {
//         return (
//             <div>
//                 <MovieSearchForm />
//                 <TvSearchForm />
//                 <div className="search-titles">
//                     <input type="text" name="search-term" id="search-term" placeholder="Search TV or Movies" required/>  
//                     <select>
//                         <option ref={(option) => this.movieSearchTerm = option} required>Movies</option>  
//                         <option ref={(option) => this.tvSearchTerm = option} required>TV</option>
//                     </select>
//                 </div>
//                 <div>
//                     <button type="submit">Search</button>
//                 </div>
//             </div>
//         )
//     }
// }

// ComboForm = reduxForm({
//   // a unique name for the form
//   form: 'combo'
// })(ComboForm)

// export default ComboForm;
