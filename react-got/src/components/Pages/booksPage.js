/**
 *  Страница отвечающая за рендер страницы с книгами.
 */


import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component{
    gotService = new GotService();
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render(){
        const {error} = this.state;
        if(error){
            return <ErrorMessage/>;
        }
        
        return (
            <ItemList
                getData = {this.gotService.getAllBooks}
                renderItem = { (item) => item.name }
                onItemSelected = {(itemId)=>{
                    const id = this.gotService._transformId(itemId);
                    this.props.history.push(id);
                }}
                />
        );
    }
}


export default withRouter(BooksPage)




/**
 * 
 *  Старая версия бер Роутера и с выводом списка и инфы о книге на 1 странице
 * 
 * 
 * 
 * export default class BookPage extends Component{

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
        
        return (
            <ItemList
                getData = {this.gotService.getAllBooks}
                renderItem = { (item) => item.name }
                onItemSelected ={this.onBookSelected}
                />
        );


        
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
 * 
 */