import './header.css'

import React, { Component } from 'react';
// import AppInfo from './app-info';


export class Header extends Component {

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
                    <div className="how-to">
                            How does it work? {this.props.howTo}
                    </div>
                    </div>
                </section>
        );
    }
}

export default Header;
