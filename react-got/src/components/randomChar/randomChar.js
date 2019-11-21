import React, {useState, useEffect, Fragment} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import {ListGroup, ListGroupItem, Col, Row} from 'reactstrap';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px; 
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    color: #000000;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    li{
        display: flex;
        justify-content: space-between !important;
    }import ErrorBoundary from '../errorMessage/errorMessage';

`


function RandomChar({interval = 1000}){

    const [char, updateChar] = useState({});
    const [error, onError] = useState(false);
    const [loading, updateLoading] = useState(true);
    const [errorStatus, onErrorStatus] = useState('');
    //const [visible, updateVisible] = useState(true);

    const gotService = new GotService();

    useEffect( () => {
        let timerId = setInterval(getChar, interval);
        return () => { clearInterval(timerId);};
    }, []);


    function getChar() {
        console.log('фыва');
        const id = 'c_' + Math.floor(Math.random() * 140 + 25); 
        gotService.getCharacter(id) 
            .then( data => {
                updateLoading(false);
                updateChar(data);
                onErrorStatus('');
                
            } )
            .catch((error) => {
                onError(true);
                onErrorStatus(error.status);
            });
    }


    // function toggleRandomChar() {
    //     updateVisible(!visible);
    //     console.log('убрали кнопку');
    // }

    // if(!visible){
    //     return <Button onClick = {toggleRandomChar}>Toggle Random Character</Button>;
    // }
        
    const errorMessage = error ? <ErrorMessage status = {errorStatus}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || errorMessage) ? <View char = {char}/> : null;       
        

    return (
        <Fragment>
            {/* <Button onClick = {toggleRandomChar}>Toggle Random Character</Button> */}
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                <RandomBlock>
                    {errorMessage}
                    {spinner}
                    {content}
                </RandomBlock>        
                </Col>
            </Row> 
        </Fragment>
    );        
}

export default RandomChar;



const View = ({char}) => {
    
    const {name, gender, born, died, culture} = char;
    return (
        <Fragment>
            <h4>Random Character: {name}</h4>
            <ListGroup flush>
                <ListGroupItem>
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <span className="term">Born </span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <span className="term">Died </span>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>    
    </Fragment>
    );
}