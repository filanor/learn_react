import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {filterOff} from '../../actions'

const AppHeader = ({totalPrice, filterOff}) => {

    return (
        <header className="header">
            <Link to ={'/'} className = "header__link" onClick = {()=> {filterOff()}}>Menu</Link>
            <Link to = "/cart" className = "header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({cartReducer}) => {
    return{
        totalPrice: cartReducer.totalPrice
    }
}
const mapDispatchToProps = {
    filterOff
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);