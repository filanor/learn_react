import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap'


const  CharDetail = styled.div`
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
`;
export default class CharDetails extends Component {

    render() {
        return (
            <CharDetail className="rounded">
                <h4>John Snow</h4>
                <ListGroup flush>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetail>
        );
    }
}