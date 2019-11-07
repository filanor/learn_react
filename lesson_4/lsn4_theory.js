/* 
import { ReactDOM } from 'react-dom';
import { Component } from 'react';
Свойства и состояния компонентов 
События в React


Ссылки
React.Fragments 
https://reactjs.org/docs/fragments.html

Class Fields
https://github.com/tc39/proposal-class-fields

Binding events  
https://www.freecodecamp.org/news/the-best-way-to-bind-event-handlers-in-react-282db2cf1530/
*/




/* ==============================================
                React.Fragmen
=============================================== */
function WhoAmI() {
    return (
        <h1>My name is, surname - </h1>
        <a href = "">My profile</a>
    )
}
/* Такой код выдаст ошибку, так как содержимое  должно быть 
обернуто в один блок. Но это можно обойти, используя 
React.Fragment 
*/

function WhoAmI() {
    return (
        <React.Fragment>
            <h1>My name is, surname - </h1>
            <a href = "">My profile</a>
        </React.Fragment>
    )
}

/*  Более короткой записью <React.Fragment></React.Fragment
является <></>. Соответственно следующий фрагмент работает так
же как и предыдущий
*/
function WhoAmI() {
    return (
        <>
            <h1>My name is, surname - </h1>
            <a href = "">My profile</a>
        </>
    )
}


/* ==============================================
            props - свойства объекта
=============================================== */

/* Но нам нужно передать данные, для этого используем спец.
 свойстро props:*/
 function WhoAmI(props) {
    return (
        <>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href = "{props.link}">My profile</a>
        </>
    )
}
/* Задаются эти свойства при вызове:
*/
ReactDOM.render(<WhoAmI name = "John" surname = "Smith" link = "facebook.com" />, document.getElementById('root'))
/* props по сути объект со всеми атрибутами каторые передаются 
для использования props в компоненте его нужно явно прописать в аргументах
функции.
Значения переданных атрибутов изменять нельзя - они работают только 
на чтение.

отрендеренные на страницу элементы нельзя изменить, для этого нужно
заново отрендерить компонент*/

// Можно использовать деструктуризация:
function WhoAmI({name , surname, link}) {
    return (
        <>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href = "{link}">My profile</a>
        </>
    )
}



/* ==============================================
            объединение компонентов
=============================================== */

/**
 * Допустим нам необходимо отрендерить несколько одинаковых элементов, но с разными параметрами.
 * Тогда мы можем объединить их в единуй компонент:
 */
const All = () => {
    return (
        <>
          <WhoAmI name = "John" surname = "Smith" link = "facebook.com" />
          <WhoAmI name = "Ivan" surname = "Smith" link = "vk.com" />
          <WhoAmI name = "Alex" surname = "Shepard" link = "facebook.com" />  
        </>
    )
}

ReactDOM.render(<All />, document.getElementById('root'))






/* ==============================================
    Используем классы в React и состояния
=============================================== */
/**
 * До этого мы все делали функциональ, с использованием фукций.
 * 
 * Попробуем использовать классы, что позволит хранить состояния:
 */

 // можно писать class WhoAmI extends Component, если до этого сделать импорт:
 // import React, {Component} from 'react'
 class WhoAmI extends React.Component {
    constructor(props) {
        // необходимо вызвать конструктор
        super (props);
        /**
         *  Для хранения состояний используется state: 
         */
        this.state = {
            years: 26 // для каждого экземпляра будет свой 
        }
    }
    render() {
        // деструктурируем props данного экземпляра класса
        const {name, surname, link} = this.props;
        const = {years} = this.state; // без этого пришлось бы писать: this.state.years
        return(
            <>
                <h1>My name is {name}, surname - {surname}, {years}</h1>
                <a href = {link}>My profile</a>
            </>
        )
    }
 }






 /* ==============================================
                Обработчики событий
=============================================== */
class WhoAmI extends React.Component {
    constructor(props) {     
        super (props);
        this.state = {
            years: 26 
        }
    }
    // Создадим метод, который будет происходить при нажатии на кнопку
    nextYear() {
        console.log(1);
    }

    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state; 
        // Добавим кнопку, при нажатии на которую будет обрабатываться событие, для этого добавим кнопке
        // onClick = {функция}
        return(
            <>
                <button onclick = {this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, {years}</h1>
                <a href = {link}>My profile</a>
            </>
        )
    }
 }
/**
 * Но данный код не будет работать - при нажатии на button будет выпадать ошибка.
 * Проблема в this. (правильное решение после state) 
 * */ 



  /* ==============================================
            Как правильно изменять state
=============================================== */

class WhoAmI extends React.Component {
    constructor(props) {     
        super (props);
        this.state = {
            years: 26 
        }
    }
    // Создадим метод, который будет происходить при нажатии на кнопку
    nextYear() {
        console.log(1);
        // this.state.years++ - тнельзя изменять state на прямую, для этого нужно использовать метод setState
        // простой пример изменения состояний
        this.setState({
            years: 27
        })
    }
 }

 /* Но в реальной жизне требуется более сложные операции со state. 
 setState работает асинхронно, поэтому может случиться так что еще не обновилось предыдущее состояние а мы 
 уже пытаемся изменить его снова. Что бы избежать этогои:
 */

    nextYear() {
        this.setState( state => ({
            years: ++state.years // Использована префиксная форма инкримента что бы сразу получить результат
        }))
    }



/**
* Что бы правильно использовать обработчик событий нужно привязать его к
* конкретному экземпляру. Это можно сделать 3 способами: 
*/
class WhoAmI extends React.Component {
    constructor(props) {     
        super (props);
        this.state = {
            years: 26 
        }
        // Первый метод: Жестко привязать в конструторе метод к экземпляру класса
        // с помощью bind (по сути мы каждому новому экземпляру класса привязываем метод и записываем в nexrYear)
        this.nextYear = this.nextYear.bind(this); 
    }
    nextYear() {
        this.setState( state => ({
            years: ++state.years 
        }))
    }
    // ... продолжение класса
}


// Второй способ: Использовать метод в кострукторе, т.е замисать метод непосредственно в наш объект
class WhoAmI extends React.Component {
    constructor(props) {     
        super (props);
        this.state = {
            years: 26 
        }
        // используем стрелочную функцию, так как она сохраняет контекст выхова родителя, а значит 
        // внутри нее this будет ссылаться на объект, в котором она была вызвана
        this.nextYear = () => {
            this.setState( state => ({
                years: ++state.years 
            }))
        }
    }
    // nextYear() { уже не нужно прописывать вне конструктора
    // }
    // ... продолжение класса
}


// 3 способ: Class fields (ES9) - эксериментальная технология, которая выйдет только в ES9
// Позволяет записывать метомы и свойства вне конструктора:
class WhoAmI extends React.Component {
    state = {
        years: 26 
    }
    this.nextYear = () => {
        this.setState( state => ({
            years: ++state.years 
        }))
    }   
    /**
     * отличается от, так как там пы просто записываем в метод наш класс, а в первом используем стрелочныю функцию
     *  nextYear() {
        this.setState( state => ({
            years: ++state.years // Использована префиксная форма инкримента что бы сразу получить результат
        }))
    }
     */

    // ... продолжение класса
}