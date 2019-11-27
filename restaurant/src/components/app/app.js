import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
//import WithRestoService from '../hoc';

import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom';




const App = () => {
    //console.log(RestoService.getMenuItems());
    // RestoService.getMenuItems()
    //     .then( menu => console.log(menu))
    //     .catch(error => {console.log('Произошла ошибка')})
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path = '/' exact component = {MainPage}/>
                <Route path = '/cart' exact component = {CartPage}/>
                {/* <Route path = '/catalog/' exact component = {MainPage}/> */}
                <Route path = '/:id'  component ={ItemPage}/>
                {/* <Route  exact component = {MainPage}/> */}
            </Switch>
        </div>
    )
}
export default App;
//export default WithRestoService()(App); 
//Используем компонент высшего порядка, который обернет наш App в Consumer