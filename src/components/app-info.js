import React, { Component } from 'react';
import Header from './header';
import NavBar from './nav-bar';
import './app-info.css';


export class AppInfo extends Component {

    render(){
        return (
            <div className="about">
                <Header />
                <NavBar />
                <div className="overlay">
                    <div className="content">
                        <h3>What is HollyWomen?</h3>
                        <p> If you've ever searched on IMDB, you've undoubtedly noticed that Hollywood tends to heavily favor male leads over females. 
                            Netflix and other streaming sites have even created categories like 'Strong Female Lead' 
                            because women with starring roles in Hollywood is such a rarity.</p>
                    </div>
                    <div className="how-to">  
                        <h5>How To Use It:</h5>
                        <footer>Enter a search term and select either TV or Movie from the drop down menu to get the posters and titles from everything that matches. All you have to do next is click on the poster!</footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppInfo;


