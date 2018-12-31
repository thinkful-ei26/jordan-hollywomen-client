import React, { Component } from 'react';
import { connect } from 'react-redux';
// import API_BASE_URL from './config';

export class AppInfo extends Component {

    render(){
        return (
            <p>Have you ever wondered if your favorite films or TV shows are gender biased in their casting and/or crew? 
                If you've ever searched on IMDB, you've undoubtedly noticed that Hollywood tends to heavily favor males over females. 
                Netflix and other streaming sites have created categories like 'Strong Female Lead'. 
                This is because women dominating in Hollywood is such a rarity. 
                Use HollyWomen to let those frustrations flare by searching your favorite TV or Film Titles to find out which are chock full of badass women, and which simply don't make the cut. 
                Search below to find out! </p>
        );
    }
}

export default AppInfo;


