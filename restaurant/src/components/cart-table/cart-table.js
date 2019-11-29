import React from 'react';
import { connect } from 'react-redux';
import {deleteFromCart, orderDone} from '../../actions';
import WithRestoService from '../hoc';

import './cart-table.scss';


const CartTable = ({items, deleteFromCart, orderDone, RestoService, justOrder}) => {
    if(justOrder){
        return (<div className="cart__title"> Спасибо за заказ :) </div>)
    }
    if( items.length === 0){
        return (<div className="cart__title"> Ваша корзина пуста :( </div>)
    }
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
            {
                items.map( item => {
                    const {price, title, url, id, qtty} = item;
                    // console.log(qtty);
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
            <button onClick = {() => {
                        orderDone();
                        RestoService.setOrder( generateOrder(items))
                    }
                } className = "order">Оформить заказ</button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

const mapStateToProps = ({items, justOrder}) => {
    return{
        items, // items: items
        justOrder
    }
};


const mapDispatchToProps = {
    deleteFromCart,
    orderDone
}

// const mapDispatchToProps = () => {
//     return {
//         onDelete: (id) => {
//             console.log(`Удалили, ${id}`)
//         }
//     }
// }

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));