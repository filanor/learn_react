import React from 'react';
import AppHeader from '../app-header'; //import AppHeader from '../app-header/index';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

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
        <div className = "app">
            <AppHeader />
            <div className = "search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts = {data} />
            <PostAddForm />
        </div>
    )
}

export default App;