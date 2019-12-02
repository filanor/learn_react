import  React from 'react';
import AppFooter from '../app-footer';
import {MainPage, CofeePage, ItemPage, PleasurePage} from '../pages';
import { Switch, Route } from 'react-router-dom';



const App = () => {
    return(
        <>
        <Switch>
            <Route path = '/' exact component = {MainPage}/>   
            <Route path = '/coffee/' component = {CofeePage}/>  
            <Route path = '/item/' component = {ItemPage}/>   
            <Route path = '/pleasure/' component = {PleasurePage}/>   
        </Switch>
        <AppFooter/>
        </>
    )
}

export default App;
