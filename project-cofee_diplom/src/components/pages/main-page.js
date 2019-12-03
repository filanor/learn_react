import React, {Component} from 'react';
import AppHeader from '../app-header';
import ItemSmallView from '../item-small-view';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {bestRequested, bestLoaded, bestError} from '../../actions'

import './main-page.sass';
import beans from '../logo/Beans_logo.svg';
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
        const {bestsellers} = this.props;
        console.log(bestsellers);

        const bestItems = bestsellers.map(item => {
            return (
                <ItemSmallView key = {item.id} type = 'best__item' item = {item}/>
            )
        });
        console.log(bestItems)
        const content = <View bestItems = {bestItems}/>;
        return (
            content
        );
    }
}



const View = (props) => {
    console.log(props);
    const {bestItems} = props;
    return (
        <>
        <div className="preview">
            <div className="container">
                <AppHeader/>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <h1 className="title-big">Everything You Love About Coffee</h1>
                        <img className="beanslogo" src={beans} alt="Beans logo"/>
                        <div className="preview__subtitle">We makes every day full of energy and taste</div>
                        <div className="preview__subtitle">Want to try our beans?</div>
                        <Link to="/coffee/" className="preview__btn">More</Link>
                    </div>
                </div>
            </div>
        </div>
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="title">About Us</div>
                        <img class="beanslogo" src={beansDark} alt="Beans logo"/>
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
                            {bestItems}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        bestsellers: state.bestsellers, 
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    bestRequested, 
    bestLoaded, 
    bestError
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);