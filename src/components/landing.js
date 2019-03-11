import React from 'react';
import Header from './header';
import NavBar from './nav-bar';
import './landing.css';


export const LandingPage = () => {

    return (
        <div className="home">
            <div className='landing-content'>
                <div className='landing-header'>
                    <Header />
                </div>
                <div className='landing-nav'>
                    <NavBar />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
