import React, { Component} from 'react';
import { Link} from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return (
            <div className="nav-bar">
                <nav className="Nav">
                        <ul>
                            <li className="Nav__item">
                                <Link to="/userfavorites" style={{color: 'white'}} >Favorites</Link>
                            </li>
                            <li className="Nav__item">
                                <Link to="/userhistory" style={{color: 'white'}} >Search History</Link>
                            </li>
                            <li className="Nav__item">
                                <Link to="/" style={{color: 'white'}} >Home</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}