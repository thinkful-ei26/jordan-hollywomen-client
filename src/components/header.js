import './header.css'

import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view'

// import AppInfo from './app-info';


export class Header extends Component {

    // componentDidMount() {     
    //     this.refs.howTo.scrollIntoView(); // scroll...
    //    }

    render(){
        return (
                <section className="header-history">
                    <div className="Header">
                        <header className="App-header">
                            <h1>HollyWomen</h1>
                        </header>
                    <div className="content-sub">  
                        <p><b>HollyWomen</b> tells you the percentage of females cast in any TV Show or Movie.</p>
                    </div>
                    <ScrollIntoView selector=".how-to">
                        <button>How does it work?</button>
                    </ScrollIntoView>
                    </div>
                </section>
        );
    }
}

export default Header;
