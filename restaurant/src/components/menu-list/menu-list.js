import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart, filterOn, filterOff} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';




class MenuList extends Component {

    componentDidMount() {
        // получаем данные с сервера и отправляем экшен MENU_LOADED
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError());
    }

    render() {
        const {menu, loading, error, filter, addedToCart, filterOn, filterOff} = this.props;
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }
        const filteredItems = filter!=='' ? menu.filter(item=>item.category===filter): menu;
        const items = filteredItems.map(menuItem => {
            return ( <MenuListItem 
                        key = {menuItem.id} 
                        menuItem = {menuItem }
                        onAddToCart = {() => addedToCart(menuItem)}
                        filterOn = {() => filter !== '' ? filterOff() : filterOn(menuItem.category)}/>
                    )
        })

        return (
            <View items = {items}/> 
            )
    }
};

const mapStateToProps =  ({menuReducer}) =>{
    
    const {menu, loading, error, filter} = menuReducer;
    return {
        menu: menu,
        loading: loading,
        error: error,
        filter: filter
    }
}


const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    filterOn,
    filterOff
}


const View = ({items}) => {

    return (
        <ul className="menu__list">
            {items}
        </ul>
    ) 
}

export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(MenuList) );
