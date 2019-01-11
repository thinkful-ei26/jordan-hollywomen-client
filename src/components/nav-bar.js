import React, { Component} from 'react';
import { Link} from 'react-router-dom';

import './nav-bar.css';

export default class NavBar extends Component {

    render() {
        return (
                <nav className="Nav">
                    <div>
                        <ul>
                            <li className="Nav__item">
                                <Link to="/userfavorites" style={{color: 'white'}} activeStyle={{color: 'red'}}>Favorites</Link>
                            </li>
                            <li className="Nav__item">
                                <Link to="/userhistory" style={{color: 'white'}} activeStyle={{color: 'red'}}>Search History</Link>
                            </li>
                            <li className="Nav__item">
                                <Link to="/" style={{color: 'white'}} activeStyle={{color: 'red'}}>Home</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}