import React, {Component} from 'react';
import {AppHeaderIndex} from '../app-header';
import ItemSmallView from '../item-small-view';
import { connect } from 'react-redux';
import {bestRequested, bestLoaded, bestError} from '../../actions';
import Error from '../error';
import Spinner from '../spinner';
import {Link} from 'react-router-dom';

import './main-page.sass';
import beansDark from '../logo/Beans_logo_dark.svg'
import CoffeeService from '../../services/coffee-service'


class MainPage extends Component {
    componentDidMount() {
        this.props.bestRequested();
        
        const {bestLoaded, bestError} = this.props
        
        const coffeeService = new CoffeeService()
        coffeeService.getBests()
            .then(res => bestLoaded(res))
            .catch(err=> bestError(err));
        
    }
    
    render() {
        const {bestsellers, error} = this.props;
        if (error) {
            return (
                <View error = {error} />
            );
        }
        const bestItems = bestsellers.map(item => {
            const nameUrl = item.name.replace(/ /g, '_');
            return (
                <Link key = {item.id} to = {`/coffee/${nameUrl}`} className='best__item'>
                    <ItemSmallView item = {item}/>
                </Link>
            )
        });
        // const content = <View bestItems = {bestItems}/>;
        return (
            <View bestItems = {bestItems} />
        );
    }
}



const View = (props) => { 
    const {bestItems, error = false} = props;
    return (
        <>

        <AppHeaderIndex/>
 
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="title">About Us</div>
                        <img className="beanslogo" src={beansDark} alt="Beans logo"/>
                        <div className="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br/><br/>
    
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="best">
            <div className="container">
                <div className="title">Our best</div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="best__wrapper">
                            {error ? <Error/> : bestItems.length === 0 ? <Spinner/> : bestItems}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

const mapStateToProps = ({catalogReducer}) => {
    const {bestsellers, error, loading} = catalogReducer;
    return {
        bestsellers, 
        error,
        loading
    }
}

const mapDispatchToProps = {
    bestRequested, 
    bestLoaded, 
    bestError
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);