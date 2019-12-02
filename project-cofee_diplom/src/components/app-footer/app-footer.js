import React from 'react';
import { Link } from 'react-router-dom';

import './app-footer.sass';
import logo from '../logo/Logo_black.svg';
import beans from '../logo/Beans_logo_dark.svg';


const AppFooter = () => {

    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-4">
                        <ul class="footer">
                            <li class="footer__item">
                                <Link to = "/">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </li>
                            <li class="footer__item">
                                <Link to="/coffee">Our coffee</Link>
                            </li>
                            <li class="footer__item">
                                <Link to="/pleasure/">For your pleasure</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img class="beanslogo" src={beans} alt="Beans logo"/>
            </div>
        </footer>
    );
}

export default AppFooter;
