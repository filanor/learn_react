import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
// import CoffeeServiceContext from './components/coffee-service-context';
// import CoffeeService from './services/coffee-service';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass';

// const coffeeService = new CoffeeService();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            {/* <CoffeeServiceContext value = {coffeeService}> */}
                <Router>
                    <App />
                </Router>
            {/* </CoffeeServiceContext> */}
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));

