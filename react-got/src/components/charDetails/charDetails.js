import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner'
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
    gotService = new GotService();
    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar(); // Всегда стоить делать проверку новых и прошлых пропсов иначе получится бесконечный цикл
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    componentDidCatch(){
        this.setState({
            charList: null,
            error: true
        })
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return
        }
        this.gotService.getCharacter(charId)
            .then( this.onCharDetailsLoaded )
            .catch( error => {this.onError(error.status);})
        //this.foo.bar = 0;
    }

    onError(status){
        this.setState({
            charList: null,
            error: status
        })
    }

    render() {
        const {char, loading} = this.state;
        if(!char) {
            return <span className = "select-error">Please select a character</span>
        }


        const spinner = loading ? <Spinner/> : null;
        

        const {name, gender, born, died, culture} = char
        return (
            <CharDetail className="rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetail>
        );
    }
}