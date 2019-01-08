// import React, { Component } from 'react';
// // import { Field, reduxForm } from 'redux-form'
// import { connect } from 'react-redux';

// import { fetchMovieInfo } from '../actions/get-movie-id';
// import { fetchTvInfo } from '../actions/get-tv-id';
// // import MovieSearchForm from './movie-search-form';
// // import TvSearchForm from './tv-search-form';
// import './movie-search-form.css';

// export class ComboSearchForm extends Component {
    
//     search(e){
//         e.preventDefault();
//         this.props.dispatch(fetchMovieInfo(this.movieSearchTerm.value))
//         this.props.dispatch(fetchTvInfo(this.tvSearchTerm.value))
//     }

//     render() {

//         return (
//             <div>
//                 <form className="search-form" onSubmit={(e) => this.search(e)}>
//                     <div className="search-titles">
//                         <input defaultValue="Godard" type="text" name="search-term" id="search-term" placeholder="Search TV or Movies" required/>  
//                         <select>
//                             <option ref={(option) => this.movieSearchTerm = option} required>Movies</option>  
//                             <option ref={(option) => this.tvSearchTerm = option} required>TV</option>
//                         </select>
//                     </div>
//                     <div>
//                         <button type="submit">Search</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         tvList: state.tvInfo.tvList,
//         tvCastInfo: state.tvInfo.tvCastInfo,
//         movieList: state.movieInfo.movieList,
//         movieCastInfo: state.movieInfo.movieCastInfo
//     }
// }

// export default connect(mapStateToProps)(ComboSearchForm);







// // export class ComboSearchForm extends Component {
    
// //     search(e){
// //         e.preventDefault();
// //         this.props.dispatch(fetchMovieInfo(this.movieSearchTerm.value))
// //     }

// //     render() {

// //         return (
// //             <div>
// //                 <form className="search-form" onSubmit={(e) => this.search(e)}>
// //                     <div className="search-combo-titles">
// //                         </div>
// //                         <select>
// //                             <option
// //                                 name="media"
// //                                 component="input"
// //                                 type="radio"
// //                                 value="tv">
// //                                 TV Shows
// //                             </option>
// //                             <option
// //                                 name="media"
// //                                 component="input"
// //                                 type="radio"
// //                                 value="movies">
// //                                 Movies
// //                             </option>
// //                         </select>  
// //                     <div>    
// //                         <button type="submit">Submit</button>
// //                     </div>
// //                 </form>
// //             </div>
// //         );
// //     }
// // }

// // const mapStateToProps = (state) => {
// //     return {
// //         movieList: state.movieInfo.movieList,
// //         castInfo: state.movieInfo.castInfo
// //     }
// // }

// // export default connect(mapStateToProps)(ComboSearchForm);

