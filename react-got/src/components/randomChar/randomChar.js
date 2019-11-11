import React, {Component} from 'react';
//import './randomChar.css';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px; 
    margin-bottom: 40px;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    li{
        display: flex;
    }
`

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock className="rounded">
                <h4>Random Character: John</h4>
                <ListGroup flush>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Gender </span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}
