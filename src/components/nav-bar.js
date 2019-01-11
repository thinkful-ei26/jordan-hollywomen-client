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
                                <Link to="/userhistory" style={{color: 'white'}} >History</Link>
                            </li>
                            <li className="nav">
                                <Link to="/userfavorites" style={{color: 'white'}} >Favorites</Link>
                            </li>
                            <li className="nav">
                                <Link to="/" style={{color: 'white'}} >Home</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}