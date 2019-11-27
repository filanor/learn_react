import React from 'react';
import { connect } from 'react-redux';
import {deleteFromCart} from '../../actions';

import './cart-table.scss';


const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
            {
                items.map( item => {
                    const {price, title, url, id, qtty} = item;
                    console.log(qtty);
                    return (
                        <div key = {id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$ * {qtty}</div>
                            <div onClick = {() => deleteFromCart(id)}className="cart__close">&times;</div>
                        </div>
                    );
                })
            }
            </div>
        </>
    );
};


const mapStateToProps = ({items}) => {
    return{
        items // items: items
    }
};


const mapDispatchToProps = {
    deleteFromCart
}

// const mapDispatchToProps = () => {
//     return {
//         onDelete: (id) => {
//             console.log(`Удалили, ${id}`)
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);