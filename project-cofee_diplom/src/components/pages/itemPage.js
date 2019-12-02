import React from 'react';

import AppHeader from '../app-header'

import beans from '../logo/Beans_logo_dark.svg'


const ItemPage = () => {
    return (
        <>
                <div class="banner">
        <div class="container">
            <AppHeader/>
            <h1 class="title-big">Our Coffee</h1>
        </div>
    </div>
    <section class="shop">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-1">
                    <img class="shop__girl" src="/img/coffee_item.jpg" alt="coffee_item"/>
                </div>
                <div class="col-lg-4">
                    <div class="title">About it</div>
                    <img class="beanslogo" src={beans} alt="Beans logo"/>
                    <div class="shop__point">
                        <span>Country:</span>
                        Brazil
                    </div>
                    <div class="shop__point">
                        <span>Description:</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div class="shop__point">
                        <span>Price:</span>
                        <span class="shop__point-price">16.99$</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default ItemPage;
