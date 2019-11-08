import React, {Component} from 'react';
import AppHeader from '../app-header'; //import AppHeader from '../app-header/index';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import Services from '../../services/services'
import ConfirmModal from '../confirmModal';
//import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

// Для реализации удаления записей нам нужно работать со state, поэтому нужно использовать классы:

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: '1'},
                {label: 'That is so good', important: false, id: '2'},
                {label: 'I need a break', important: false, id: '3'},
                4, 
                {}
            ], 
            //modal: false
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.confirmation = this.confirmation.bind(this);
        this.maxId = 4;
    }

    confirmation(res){
        return res;
    }

    deleteItem(id) {
        this.setState( ({data}) => {
            // Нельзя менять первоначальное содержимое data, поэтому заменим первоначальный массив новым
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index); //можно сразу поместить в newArray
            const newArray = [...before, ...data.slice(index+1)]; // Используя spread оператор объединим массив до index и после
            return{
                //modal: true
                data: newArray // помещаем в data новый массив
            }
        })
        
    }

    addItem(body) {
        const srv = new Services();
        const newItem = {
            label: body,
            important: false,
            id: srv.generateId()
        }
        this.setState( ({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }

    render() {
        return (
            <AppBlock>
            {/*<div className = "app">  - до использования CSS in JS и библиотеки styled-components*/}
                <AppHeader />
                <div className = "search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts = {this.state.data}
                    onDelete = {this.deleteItem /* Передаем функцию  onDelete в PostList  */}              
                />
                <PostAddForm 
                    onAdd = {this.addItem}
                />
                {/*<ConfirmModal opened = {this.state.modal} confirm = {this.confirmation}/>*/}
            </AppBlock>
    
        )
    }
}

/*
Старая версия

const App = () => {

    // Имитируем сервер.  Например мы могли бы помещать в data ответ от сервера
    // повторяющимся элементам нужны id
    const data = [
        {label: 'Going to learn React', important: true, id: 'qwe'},
        {label: 'That is so good', important: false, id: 'sdf'},
        {label: 'I need a break', important: false, id: 'asd'},
        4, 
        {}
    ];

    return (
        <AppBlock>
        {/*<div className = "app">  - до использования CSS in JS и библиотеки styled-components*//*}
            <AppHeader />
            <div className = "search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList 
                posts = {data}
                onDelete = {id => console.log(id) /* Передаем функцию  onDelete в PostList  *//*} 
                
            />
            <PostAddForm />
        </AppBlock>

    )
}

export default App;
*/