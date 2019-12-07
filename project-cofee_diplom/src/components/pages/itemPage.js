import React, {Component} from 'react';
import CoffeeService from '../../services/coffee-service';
import Spinner from '../spinner';
import {AppHeader} from '../app-header';
import {catalogError, catalogLoaded, catalogRequested} from '../../actions';

import beans from '../logo/Beans_logo_dark.svg';
import { connect } from 'react-redux';


class ItemPage extends Component {
    state = {
        fullDesc: false
    }

    componentDidMount() {
        this.props.catalogRequested();
        
        const {catalogLoaded, catalogError} = this.props
        
        const coffeeService = new CoffeeService()
        coffeeService.getCatalog()
            .then(res => catalogLoaded(res))
            .catch(err=> catalogError(err));
    }


    render() {
        const urlName = this.props.match.params.name.replace(/_/g, ' ');

        const appContent = {title: urlName, style: ''};

        if (this.props.loading){
            return (
                <>
                    <AppHeader content = {appContent}/>
                    <Spinner/>
                </>
                )
        }
        const {catalog} = this.props;
        
        const item = catalog.find(el => el.name === urlName);
        const {url, country, description, price} = item;
        
        
        const desc = (!this.state.fullDesc&&description.length>200) ? description.slice(0, 201) + '...' : description;
    

        return (
            <>
                <AppHeader content = {appContent}/>
                <section className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 offset-1">
                                <img className="shop__girl" src={url} alt="coffee_item"/>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src={beans} alt="Beans logo"/>
                                <div className="shop__point">
                                    <span>Country:</span>
                                    {country}
                                </div>
                                <div className="shop__point shop__description" onClick = {() =>{
                                    this.setState({fullDesc: !this.state.fullDesc})
                                }}>
                                    <span>Description:</span>
                                    {desc}
                                </div>
                                <div className="shop__point">
                                    <span>Price: </span>
                                    <span className="shop__point-price">{price}$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = ({catalogReducer}) => {
    const {catalog, loading} = catalogReducer;
    return {
        catalog,
        loading
    }
}

const mapDispatchToProps = {
    catalogError,
    catalogLoaded,
    catalogRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
