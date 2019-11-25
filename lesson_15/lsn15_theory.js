/**
 * 
 * React Context
 * 
 * React Context
 * https://ru.reactjs.org/docs/context.html
 *
 *
 * json-server npm
 * https://www.npmjs.com/package/json-server
 * 
 * 
 * 
 *  Начиная с 16.3 перестал быть эксперементальной
 *  Используется, например в react-router DOM
 * 
 * Context позволяет создать хранилище данных, которое будет доступно во всех компонентах,
 *  ниже по иерархии (Примеры <Provider/> или <Router/>)
 */


 // Для Использования контекста нам необходимо создать элемент <Provider> и передать в него значение
 // Например используемый на сайте язык
<App>
    <Provider value = {lang}>
        <MainPage>
            <Blog>

            </Blog>
        </MainPage>

        <ContactsPage>
            <Address>

            </Address>
        </ContactsPage>
    </Provider>
</App>

// Второй необходимый элемент это <Consumer>
// Предположим, что нам нужно, что бы <Adress> считать значение value.
// Для этого внутри элемента Consumer нам нужно отрендерить наш элемент, так что мы 
// помещаем в него функцию, которая получает значение lang из <Provider> и рендерим
// <Adress> передавая в это значение lang
<App>
    <Provider value = {lang}>
        <MainPage>
            <Blog>

            </Blog>
        </MainPage>

        <ContactsPage>
            <Consumer>
                {
                    (lang) => {
                        return (
                            <Address lang = {lang}></Address>
                        )
                    }
                }
            </Consumer>
        </ContactsPage>
    </Provider>
</App>

// Такой прием часто используется для работы с языком или темами на сайте. Так же его можно
// использовать для работы с fetch

// Есть 2 метода использования Consumer один для функциональных элементов, второй для классовых


//==========================================================================================
//==========================================================================================
//==========================================================================================


// Пример файла Context.js
import React from 'react';

// Создаем Контекст
const MyContext = React.createContext(); // Можно передать значение по умолчанию

export default MyContext;
// В MyContext лежат две сущности (Provider и Consumer). по факту это объект



// App.js
import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import MyContext from './components/Context';

function App() {
    return (
        <div className = "App">
            <MyContext.Provider value = {'Anton'}> 
            {/*  в value можно передавать более сложные элементы, например объекты или сервисы
            <MyContext.Provider value = { {
                name: 'Anton', 
                age: 30
            } }>  */}
                <Wrapper/>
            </MyContext.Provider>


        </div>
    );
}
export default App;
// То, что нужно передать через провайдер  ниже должно ВСЕГДА называться value.
// Если написать, например <MyContext.Provider name = {'Ivan'}> то работать не будет


// Name.js
import React from 'react';
import MyContext from './components/Context';

const Name = () => {
    return (
        <MyContext.Consumer>
            {   // Тут функциональный элемент, так что используем такой метод 
                (value) => { // тут название может быть любым
                    return (
                        <div className = "name">
                            My name is {value}
                        </div>
                    )
                }
            }

        </MyContext.Consumer>
    )
}
export default Name



// Рассмотрим метод для классовых элементов. Изменится только файл Name.js:
import React, {Component} from 'react';
import MyContext from './components/Context';
import { Component } from 'react';

class Name extends Component {
    render(){
        return (
            <div className = "name">
                My name is {this.context}
                {/* My name is {this.context.name}, age {thid.context.age} */}
            </div>
        )
    }
}

Name.contextType = MyContext;
export default Name;