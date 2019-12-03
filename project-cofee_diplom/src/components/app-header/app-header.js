import React from 'react';
import {Link} from 'react-router-dom';

import './app-header.sass';
import logo from '../logo/Logo.svg';


const AppHeader = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                <header>
                    <ul className="header">
                        <li className="header__item">
                            <Link to = '/'>                            
                                <img src={logo} alt="logo"/>
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to = "/coffee">Our coffee</Link>
                        </li>
                        <li className="header__item">
                            <Link to = "/pleasure/">For your pleasure</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );
}

export default AppHeader;