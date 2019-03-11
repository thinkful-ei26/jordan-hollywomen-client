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
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav">
                                <Link to="/userhistory">Search History</Link>
                            </li>
                            <li className="nav">
                                <Link to="/about">Learn More</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}