import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import API_BASE_URL from './config';
import './app-info.css';

export class AppInfo extends Component {

    render(){
        return (
            <div className="overlay">
                <div className="content">
                    <h3>What is HollyWomen?</h3>
                    <p> If you've ever searched on IMDB, you've undoubtedly noticed that Hollywood tends to heavily favor male leads over females. 
                        Netflix and other streaming sites have even created categories like 'Strong Female Lead' 
                        because women with starring roles in Hollywood is such a rarity.</p>
                </div>
                <div className="content-sub">  
                    <p><b>HollyWomen</b> tells you the percentage of females cast in any TV Show or Movie.</p>
                </div>
            </div>
        );
    }
}

export default AppInfo;


