import React, { Component } from 'react';
import { connect } from 'react-redux';
// import API_BASE_URL from './config';
import './appInfo.css';

export class AppInfo extends Component {

    render(){
        return (
            <div className="overlay">
                <div className="content">
                    <h3>What is HollyWomen?</h3>
                    <p>Have you ever wondered just how gender biased Hollywood was? 
                        If you've ever searched on IMDB, you've undoubtedly noticed that Hollywood tends to heavily favor male leads over females. 
                        Netflix and other streaming sites have even created categories like 'Strong Female Lead' 
                        because women with starring roles in Hollywood is such a rarity. 
                        Use HollyWomen to find out which projects are fairly featuring females, and which simply don't make the cut. 
                        Search below to find out! 
                    </p>
                </div>
            </div>
        );
    }
}

export default AppInfo;


