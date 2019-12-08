import React, {Component} from 'react';
import {AppHeader} from '../app-header';
import { connect } from 'react-redux';
import {catalogError, catalogLoaded, catalogRequested, goodsLoaded, goodsError, goodsRequested} from '../../actions';
import Error from '../error';
import CoffeeService from '../../services/coffee-service';

class Layout extends Component {

    componentDidMount() {
        const coffeeService = new CoffeeService()
        const {catalogRequested, catalogLoaded, catalogError, goodsLoaded} = this.props
            catalogRequested();
            coffeeService.getCatalog()
                .then(res => catalogLoaded(res))
                .catch(error => catalogError(error))

            coffeeService.getGoods()
                .then(res => goodsLoaded(res))
                .catch(error => {console.log('ошибка'); catalogError(error)});
        
    }

    render() {
        const {error, children} = this.props;

        const {url} = children.props.match;
        
        let headerContent = {};
        if(url === '/pleasure/'){
            headerContent = {title: 'For your pleasure', style: 'banner_pleasure'};
        } else if (url === '/coffee'){
            headerContent = {title: 'Our Coffee', style: ''};
        } else if (url === '/contact/'){
            headerContent = {title: 'Contact Us', style: 'banner_contact'};
        }
        
        if(error){
            return(
                <>
                    <AppHeader content = {headerContent}/>
                    <Error/>
                </>
            )
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
        catalog: catalogReducer.catalog,
        goods: catalogReducer.goods
    }
}

const mapDispatchToProps = {
    catalogError, 
    catalogLoaded, 
    catalogRequested,
    goodsLoaded,
    goodsError,
    goodsRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);