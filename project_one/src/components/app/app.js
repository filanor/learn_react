import React, {Component} from 'react';
import AppHeader from '../app-header'; //import AppHeader from '../app-header/index';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import Services from '../../services/services'
//import ConfirmModal from '../confirmModal';
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
                {label: 'Going to learn React', important: true, like: false, id: '1'},
                {label: 'That is so good', important: false, like: false, id: '2'},
                {label: 'I need a break', important: false, like: false, id: '3'},
                {},
                4
            ], 
            term: '', // для поиска
            filter: 'all',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.srv = new Services();

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
        if(body != ''){
            const newItem = {
                label: body,
                important: false,
                like:false,
                id: this.srv.generateId()
            }
            this.setState( ({data}) => {
                const newArray = [...data, newItem];
                return {
                    data: newArray
                }
            })
        }
    }

    filterPost(items, filter) {
        if(filter == 'like'){
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items // На случий если ничего не введено, или приложение только запустилось, либо пользователь стер запрос
                        // мы выводим весь массив items (в котором лежит data - передаем ее в render)
        }

        return items.filter( (item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1 // отсеиваем все посты в которые есть введенная пользователем инфа (term)
                                                // если такой инфы нет, то indexOf() вернет -1 
        })
    }

    onUpdateSearch(term) {
        this.setState({term})   
    }

    onFilterSelect(filter) {
        this.setState({filter})   
    }

    onToggleImportant(id) {
        /** Функция, отвечает за переключение звездочек */
        this.setState(({data}) => {
            return {
                data: this.srv.changeArr('important', data, id)
            }
        });
    }
    onToggleLiked(id) {
        /** Функция, отвечает за переключение лайков */
        this.setState(({data}) => {
            return {
                data: this.srv.changeArr('like', data, id)
            }
        });
    }



    render() {
        
        // Проходим по каждому элементу массива и смотрим на like. Если он true, то возвращаем его
        // filter() возвращает новый, отфильтрованный массив и мы можем узнать его размер
        //const srv = new Services();

        const {data, term, filter} = this.state;
        const validData = data.filter(item => typeof item === 'object' && this.srv.isEmpty(item)) // Убираем пестые объекты и не объекты
        const  visiblePosts = this.filterPost(this.searchPost(validData, term), filter ); // если нет поискового запроса, то все посты

        const liked = data.filter(item => item.like).length; 
        const allPosts = validData.length;
        // так же тут же мы проводим фильтрацию (все или понравившиеся)

        return (
            <AppBlock>
            {/*<div className = "app">  - до использования CSS in JS и библиотеки styled-components*/}
                <AppHeader 
                    liked = {liked}
                    allPosts = {allPosts}/>
                <div className = "search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter 
                    filter = {filter}
                    onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList 
                    //posts = {this.state.data} // старое до реализации поиска (теперь выводим visiblePosts, в которой либо все
                    // посты, либо результат поиска)
                    posts = {visiblePosts}
                    onDelete = {this.deleteItem /* Передаем функцию  onDelete в PostList  */}    
                    onToggleImportant = {this.onToggleImportant /** Функция, отвечает за переключение звездочек */}
                    onToggleLiked = {this.onToggleLiked /** Функция, отвечает за переключение лайков */}     
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