import React, { Component} from 'react';
import { connect } from 'react-redux';

import './search-history.css';

export class SearchHistory extends Component {

    clearHistory(){
        let cleared = null 
        return (
            <div className="clear-history">
                    {cleared}
            </div>
        )
    }

    render() {

        let searches = this.props.recentSearches.map((searchTerm, i, x) => (
            <div className="history" key={i}>
                <li key={x}>
                    {searchTerm.searchTerm}
                </li>
            </div>
        ));  

        return (
                <div className="dynamic-history" onSubmit={() => this.onSubmit()}>
                    <div className="search-history-label">
                        <label>Recent Searches:</label>
                    </div>
                    <div className="history-uls">
                        <ul id="searchHistory" className="searchBox clearfix">
                            {searches}
                        </ul>
                    </div>
                    {/* <div className="button-clear-history">
                        <button className="clear-history" onClick={() => this.clearHistory()}>Clear History</button>
                    </div> */}
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

