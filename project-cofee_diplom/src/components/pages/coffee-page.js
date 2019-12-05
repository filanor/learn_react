import React, {Component} from 'react';
import ItemSmallView from '../item-small-view';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import Filter from '../filter';
import {Link} from 'react-router-dom';

import './coffee-page.sass';
import beans from '../logo/Beans_logo_dark.svg';

class CoffeePage extends Component{ 
    render() {
        if (this.props.loading){
            return <View type = 'loading'/>
        }

        const {catalog} = this.props;

        const items = catalog.map(item => {
            const nameUrl = item.name.replace(/ /g, '_');
            return(
                <Link key = {item.id} to = {`/coffee/${nameUrl}`} className='shop__item'>
                    <ItemSmallView item = {item}/>
                </Link>
            )
        })

        const content = <View content = {items}/>
        return (
            content
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        loading: state.loading,
        error: state.error,
        catalog: state.catalog
    }
}

export default connect(mapStateToProps)(CoffeePage);


 

const View = ({content, type = ''}) => {
    return (
        <>
            {/* <AppHeader title = 'Our Coffee'/> */}
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src="/img/coffee_girl.jpg" alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={beans} alt="Beans logo"/>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <Filter/>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shop__wrapper">
                                { type === 'loading'? <Spinner/> : content}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

