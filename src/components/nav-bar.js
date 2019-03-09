import React, { Component} from 'react';
import { Link} from 'react-router-dom';
import './nav-bar.css';

export default class NavBar extends Component {

    render() {
        return (
            <div className="nav">
                <nav className="nav">
                        <ul>
                            <li className="nav">
                                <Link to="/" style={{color: 'black'}} >Home</Link>
                            </li>
                            <li className="nav">
                                <Link to="/userhistory" style={{color: 'black'}} >Search History</Link>
                            </li>
                            <li className="nav">
                                <Link to="/userfavorites" style={{color: 'black'}} >Favorites</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}