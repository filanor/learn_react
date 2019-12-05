import React from 'react';
import {Link} from 'react-router-dom';

import './app-header.sass';
import logo from '../logo/Logo.svg';
import beans from '../logo/Beans_logo.svg';

const AppHeaderIndex = () => {
    return (
        <>
            <div className="preview">
                <div className="container">
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
                                    <li className="header__item">
                                        <Link to = "/contact/">Contact us</Link>
                                    </li>
                                </ul>
                            </header>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src={beans} alt="Beans logo"/>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <Link to="/coffee/" className="preview__btn">More</Link>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default AppHeaderIndex