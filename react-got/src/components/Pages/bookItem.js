import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails/';
import styled from 'styled-components';
import oldBook from './oldBook.jpeg';

const Book = styled.div`
    margin: 0px auto;
    background-image: url("${oldBook}");
    font-size: 12px;
    font-weight: bold;
    color: #dddddd;
`;

export default class BookItem extends Component {
    gotService = new GotService();


    render() {
        console.log(this.props.bookId)
        return (
            <Book>
                <ItemDetails 
                    itemId = {this.props.bookId}
                    getData = {this.gotService.getBook}
                    itemType = 'book'>
                        <Field field = 'numberOfPages' label = 'NumberOfPages'/>
                        <Field field = 'released' label = 'Released'/>
                        <Field field = 'publisher' label = 'Publisher'/>
                </ItemDetails>
            </Book>
        )
    }
}