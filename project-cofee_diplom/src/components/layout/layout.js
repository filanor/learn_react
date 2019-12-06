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
        let headerContent = {};
        if(url === '/pleasure/'){
            headerContent = {title: 'For your pleasure', style: 'banner_pleasure'};
        } else if (url === '/coffee'){
            headerContent = {title: 'Our Coffee', style: ''};
        } else if (url === '/contact/'){
            headerContent = {title: 'Contact Us', style: 'banner_contact'};
        }

        
        return (
            <>
                <AppHeader content = {headerContent}/>
                {children}
            </>
        )
    }
}

const mapStateToProps = ({catalogReducer}) => {
    return {
        error: catalogReducer.error,
    }
}

const mapDispatchToProps = {
    catalogError, 
    catalogLoaded, 
    catalogRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);