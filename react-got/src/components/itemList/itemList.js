import React, {Component} from 'react';
//import './itemList.css';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ItemsBlock = styled.ul`
    li{
        cursor: pointer;
    }
`

export default class ItemList extends Component {

    render() {
        return (
            <ItemsBlock className="list-group">
                <li>
                    John Snow
                </li>
                <li>
                    Brandon Stark
                </li>
                <li>
                    Geremy
                </li>
            </ItemsBlock>
        );
    }
}