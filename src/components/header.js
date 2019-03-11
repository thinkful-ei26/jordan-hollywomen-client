import './header.css'

import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view'

export class Header extends Component {

    render(){
        return (
                <section className="header-history">
                    <div className="Header">
                        <header className="App-header">
                            <h1>HollyWomen</h1>
                        </header>
                        <p id="header-sub-1">Gender Demographics</p>
                        <p id="header-sub">Discover the percentage of females cast in any TV Show or Movie.</p>
                    {/* for mobile device users -- brings how-to footer into focus */}
                    {/* <ScrollIntoView selector=".how-to">
                        <button>How does it work?</button>
                    </ScrollIntoView> */}
                    </div>
                </section>
        );
    }
}

export default Header;
