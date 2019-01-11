import './header.css'

import React, { Component } from 'react';
// import { Router, Link } from 'react-router-dom';

// import AppInfo from './app-info';
// import { SearchHistory } from './dynamic-history'


export class Header extends Component {

    howTo(ref) {
        ref.focus();
    }

    render(){
        return (
            // <Router history={SearchHistory}>
                <section className="header-history">
                    <div className="Header">
                        <header className="App-header">
                            <h1>HollyWomen</h1>
                        </header>
                    <div className="content-sub">  
                        <p><b>HollyWomen</b> tells you the percentage of females cast in any TV Show or Movie.</p>
                    </div>
                    <div className="how-to">
                        {/* <Link to='/components' component={<AppInfo/>} howTo={this.howTo} style={{color: 'white'}} activeStyle={{color: 'red'}}>
                            HOW DOES IT WORK?
                        </Link> */}
                    </div>
                    </div>
                </section>
        //  {/* </Router> */}
        );
    }
}

export default Header;
