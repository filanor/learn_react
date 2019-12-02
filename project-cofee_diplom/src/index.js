import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass';


ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

