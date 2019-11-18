/**
 *  Страница отвечающая за рендер страницы с книгами.
 */


import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';

export default class BookPage extends Component{

    gotService = new GotService();
    state = {
        selectedBook: '',
        error: false
    }

    onBookSelected = (id) => {
        this.setState({
            selectedBook: id
        });
    }

    componentDidCatch() {
        this.setState({
            selectedBook: '',
            error: true
        })
    }

    render(){
        const {error, selectedBook} = this.state;
        if(error){
            return <ErrorMessage/>;
        }
        
        const bookList = <ItemList
                            getData = {this.gotService.getAllBooks}
                            renderItem = { (item) => item.name }
                            onItemSelected ={this.onBookSelected}/>

        
        const bookDetail = <ItemDetails 
                            itemId = {selectedBook}
                            getData = {this.gotService.getBook}
                            itemType = 'book'>
                                <Field field = 'numberOfPages' label = 'NumberOfPages'/>
                                <Field field = 'released' label = 'Released'/>
                                <Field field = 'publisher' label = 'Publisher'/>
                            </ItemDetails>

        return(
            <RowBlock left = {bookList} right = {bookDetail}/>

        );
    }
}
