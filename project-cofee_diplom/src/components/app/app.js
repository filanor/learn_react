import  React from 'react';
import AppFooter from '../app-footer';
import {MainPage, CofeePage, ItemPage, PleasurePage, ContactPage} from '../pages';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layout';



const App = () => {
    return(
        <>
        <Switch>
            <Route path = '/' exact component = {MainPage}/>     
            <AppRoute path = '/pleasure/' layout = {Layout} component = {PleasurePage}/>
            <AppRoute path = '/coffee/' exact layout = {Layout} component = {CofeePage}/>
            <Route path = '/coffee/:name' component = {ItemPage}/>
            <AppRoute path = '/contact/' layout = {Layout} component = {ContactPage}/>
        </Switch>
        <AppFooter/>
        </>
    )
}

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return(
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
    )
}

export default App;
