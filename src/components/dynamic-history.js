import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/get-history';
import { fetchAddHistory } from '../actions/add-history';

import './search-history.css';

export class SearchHistory extends Component {
    constructor() {
        super();

    this.state = {
        searchHistory: [],
        currentSearch: ''
    };
}

    handleSearchHistory(){
        this.setState({
            searchHistory: [...this.state.searchHistory, this.state.currentSearch]
        })
    };

    handleCurrentSearch(e){
        this.setState({
            currentSearch: e
        })
    };

    onSubmit(searchTerm, id){
        if (searchTerm){
            this.setState({
                searchHistory: [...this.state.searchHistory, this.state.currentSearch]
            })
            this.props.dispatch(fetchHistory())
            .then(results => {
            this.props.formSubmit(results.data.searchHistory)
            })
        }

        else if (id){
            this.setState({
                currentSearch: this.currentSearch.search,
            })
            this.props.dispatch(fetchAddHistory(id))
            .then(results => {
                console.log('results:', results)
            this.props.formSubmit(results.data.updatedHistory)
            })
        }
    }

    clearHistory(){
        this.setState({
            searchHistory: [],
            currentSearch: '',
        })
    }

    render() {

        let searches = this.props.recentSearches.map((searchTerm, i, x) => (
            <div className="history" key={i}>
                <li key={x}>
                    {searchTerm.searchTerm}
                </li>
            </div>
        ));
    
        console.log('all searches:', searches)

        const count = 0;
        const termSearch = () => {
            for (let i = 0; i < searches.length; i++){
                console.log('term:', this.searches.searchTerm[i])
                let regx = new RegExp("\\b" + this.searches.searchTerm[i].toLowercase() + "\\b");
                let found = searches.toLowercase().match(regx);
                console.log("found:", found)
                if(found){
                    this.count = count + found.length;
                }
                console.log("count:", this.count)
            }
        }

        const termFrequencyResults = () => {
            let algo = count / searches.length
            if(algo*termSearch > 0) {
                return searches
            }
            console.log('results:', termFrequencyResults)
        }    

        return (
                <div className="dynamic-history" onSubmit={() => this.onSubmit()}>
                    <div className="search-history-label">
                        <label>Recent Searches:</label>
                    </div>
                    <div className="history-uls">
                        <ul id="searchHistory" className="searchBox clearfix">
                            {searches}
                            {termFrequencyResults}
                        </ul>
                    </div>
                    <div className="button-clear-history">
                        <button className="clear-history" onClick={() => this.clearHistory()}>Clear History</button>
                    </div>
                </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { 
        recentSearches: state.history.recentSearches,
    }
};

export default connect(mapStateToProps)(SearchHistory);

