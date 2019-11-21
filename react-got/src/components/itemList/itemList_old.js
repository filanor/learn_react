import React, {Component} from 'react';
import Spinner from '../spinner/';
import ErrorMessage from '../errorMessage';
import {ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemsBlock = styled.ul`
    li{
        cursor: pointer;
    }
`

export default class ItemList extends Component {
    
    state = {
        itemList: null,
        //charList: null,
        error: false
    }
    
    componentDidMount(){
        const {getData} = this.props;
        getData()
        //this.gotService.getAllCharacters()
            .then( (itemList) => {
                this.setState({
                    itemList,
                    error: false
                })
            })
            .catch( (error) => {this.onError(error.status)});
    };
    
    componentDidCatch(){
        this.setState({
            itemList: null,
            error: true
        })
    }
    onError(status){
        this.setState({
            itemList: null,
            error: status
        })
    }

    renderItems(arr) {
        return arr.map( (item, i) => {
            const {id} = item
            const label = this.props.renderItem(item)
            return(
                <ListGroupItem
                    key = {id}
                    onClick = {() => this.props.onItemSelected(id)} // (5 сраница)
                    >
                    {/*item.name*/}
                    {label}
                </ListGroupItem>
            )
        })
    }


    render() {

        const {error, itemList} = this.state;

        if(error){
            return <ErrorMessage status = {error}/>
        }

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <ItemsBlock className="list-group">
                {items}
            </ItemsBlock>
        );
    }
}

// Пропсы по умолчанию
ItemList.defaultProps = {
    onItemSelected: () => {}
}

// Проверка типов пропсов
ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    //getData: PropTypes.arrayOf(PropTypes.object) Проверяем что getData является массивом объектов (показано для примера)
}