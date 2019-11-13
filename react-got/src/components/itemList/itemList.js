import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner/';
import ErrorMessage from '../errorMessage';
import {ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ItemsBlock = styled.ul`
    li{
        cursor: pointer;
    }
`

export default class ItemList extends Component {
    gotService = new GotService();
    state = {
        charList: null,
        error: false
    }
    
    componentDidMount(){
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList,
                    error: false
                })
            })
            .catch( (error) => {this.onError(error.status)});
    };
    
    componentDidCatch(){
        this.setState({
            charList: null,
            error: true
        })
    }
    onError(status){
        this.setState({
            charList: null,
            error: status
        })
    }

    renderItems(arr) {
        return arr.map( (item, i) => {
            return(
                <ListGroupItem
                    key = {item.id}
                    onClick = {() => this.props.onCharSelected(41 + i)} // (5 сраница)
                    >
                    {item.name}
                </ListGroupItem>
            )
        })
    }


    render() {

        const {error, charList} = this.state;

        if(error){
            return <ErrorMessage status = {error}/>
        }

        if(!charList){
            return <Spinner/>
        }

        const items = this.renderItems(charList)

        return (
            <ItemsBlock className="list-group">
                {items}
            </ItemsBlock>
        );
    }
}