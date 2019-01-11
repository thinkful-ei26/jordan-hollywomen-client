import './header.css'

import React, { Component } from 'react';

export class Footer extends Component {

    render(){
        return (
                <section className="footer">
                    <div className="how-to">  
                        <footer>Enter a search term and select either TV or Movie from the drop down menu to get the posters and titles from everything that matches. All you have to do next is click on the poster!</footer>
                    </div>
                </section>
        );
    }
}

export default Footer;
