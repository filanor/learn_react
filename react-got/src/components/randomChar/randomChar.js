import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px; 
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    li{
        display: flex;
        justify-content: space-between !important;
    }
`

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock>
                <h4>Random Character: John</h4>
                <ListGroup flush>
                    <ListGroupItem>
                        <span className="term">Gender </span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}
