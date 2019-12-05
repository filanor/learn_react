import React from 'react';
import { Link } from 'react-router-dom';

import './app-footer.sass';
import logo from '../logo/Logo_black.svg';
import beans from '../logo/Beans_logo_dark.svg';


const AppFooter = () => {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to = "/">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/coffee">Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/pleasure/">For your pleasure</Link>
                            </li>
                            <li className="footer__item">
                                <Link to = "/contact/">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={beans} alt="Beans logo"/>
            </div>
        </footer>
    );
}

export default AppFooter;
