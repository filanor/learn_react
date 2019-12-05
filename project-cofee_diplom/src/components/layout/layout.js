import React, {Component} from 'react';
import {AppHeader} from '../app-header';
import { connect } from 'react-redux';
import {catalogError, catalogLoaded, catalogRequested} from '../../actions';
import Error from '../error';
import CoffeeService from '../../services/coffee-service';

class Layout extends Component {

    componentDidMount() {
        const {catalogRequested, catalogLoaded, catalogError} = this.props
        catalogRequested();
        
        const coffeeService = new CoffeeService()
        coffeeService.getCatalog()
            .then(res => catalogLoaded(res))
            .catch(error => catalogError(error))


    }

    render() {
        const {error, children} = this.props;
        if(error){
            return(
                <>
                    <AppHeader/>
                    <Error/>
                </>
            )
        }


        const {url} = children.props.match;
        let pageName = '';
        if(url === '/pleasure/'){
            pageName = 'For your pleasure';
        } else if (url === '/coffee'){
            pageName = 'Our Coffee';
        } else if (url === '/contact/'){
            pageName = 'Contact Us';
        }

        
        return (
            <>
                <AppHeader title = {pageName}/>
                {children}
            </>
        )
    }
}

const mapStateToProps = ({error}) => {
    return {
        error: error,
    }
}

const mapDispatchToProps = {
    catalogError, 
    catalogLoaded, 
    catalogRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);