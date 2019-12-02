import React from 'react';
import AppHeader from '../app-header';
import ItemSmallView from '../item-small-view';

import './coffee-page.sass';
import beans from '../logo/Beans_logo_dark.svg';

const CoffeePage = () => {
    return(
        <>
    <div className="banner">
        <div className="container">
            <AppHeader/>
            <h1 className="title-big">Our Coffee</h1>
        </div>
    </div>
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
            <div class="line"></div>
            <div class="row">
                <div class="col-lg-4 offset-2">
                    <form action="#" class="shop__search">
                        <label class="shop__search-label" for="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input"/>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="shop__filter">
                        <div class="shop__filter-label">
                            Or filter
                        </div>
                        <div class="shop__filter-group">
                            <button class="shop__filter-btn">Brazil</button>
                            <button class="shop__filter-btn">Kenya</button>
                            <button class="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="shop__wrapper">
                        <ItemSmallView type = "shop__item"/>
                        <ItemSmallView type = "shop__item"/>
                        <ItemSmallView type = "shop__item"/>
                        <ItemSmallView type = "shop__item"/>
                        <ItemSmallView type = "shop__item"/>
                        <ItemSmallView type = "shop__item"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );

}

export default CoffeePage;