import React, {Component, Fragment} from 'react';
import  {Col, ListGroup, ListGroupItem} from 'reactstrap';
import BdWork from '../services/bdWork';
import Item from './Item';
import styled from 'styled-components';


const ItemsBlock = styled.div`
    max-width: 1200px;
    margin: 0px auto;
    ul{display: flex; justify-content: space-between; width: 100%; overflow: hidden}
    li{padding: 0px; list-style: none; width: 25%; padding: 0px 20px}
    h2{display: block; text-align: center}
`,

ItemPhoto = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    img{ display: block; margin: auto auto; max-width: 100%; max-height: 100%;}
`,
    ItemName = styled.h2`
        display: block;
        width: 100%;
        font-weight: bold;
        margin: 10px 0px;
        fonst-size: 12px;
        height: 56px;
    `, 
    ItemPrice = styled.a`
        display: block;
        background-color: gold;
        width: 80%;
        height: 40px;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        margin: 20px auto;
    `

export default class ItemList extends Component {

    bd = new BdWork();
    state = {
        items: [],
        type: this.props.type,
        error: false
    }
    componentDidMount(){
        this.getItems()
    }

    getItems = () => {
        this.bd.getItems(this.state.type)
            .then(this.onItemsLoided)
            .catch(this.onError);
    }
    onError = () => {
        this.setState({error: true})
    }
    onItemsLoided = (items) => {
        this.setState({
            items: items,
            error: true
        })
    }

    render(){
        const {items, type} = this.state;
        const itemsToShow = items.length > 4 ? items.slice(0, 4) : items
        
        const elements = itemsToShow.map( (el) => {
            const {url, name, price} = el
            return (
                <ListGroupItem>
                    <ItemPhoto>
                        <img src= {url}></img>
                    </ItemPhoto>
                    <ItemName>{name}</ItemName>
                    <ItemPrice>{price}</ItemPrice>
                </ListGroupItem>
            );
        });
        //console.log(items);
        return (
            <ItemsBlock>
                <h2>{type}</h2>
                <ListGroup>
                    {elements}
                </ListGroup>
            </ItemsBlock>
        )
    }
}
