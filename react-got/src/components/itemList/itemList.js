import React, {Component} from 'react';
import {ListGroupItem} from 'reactstrap';
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
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ItemsBlock>
        );
    }
}