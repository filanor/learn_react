import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// Для примера (что бы понять как работает jsx) закоментим импорт и рендер App
//ReactDOM.render(<App />, document.getElementById('root'));

// Данный код написан на jsx 
//const elem = <h2>Hello Word!</h2>
// babel преобразует его в стандартный js код:
//const elem = React.createElement('h2', null, "Hello World!!!")


//В react есть правило, что если блок занимает нескольно строк (например блок в блоке), то его нужно окружить () 
//так же, если нужно  создать несколько элементов, то их нужно обернуть в один блок (например div) это связанно с 
// тем, что по факту react изспользует в своей работе createElrment ()

// const elem = (
//     <div>
//         <h2>Hello Word!</h2>
//         <input type = "text" placeholder = "Type here"/>
//         <button />
//     </div>
// )
//рендерим элемент на страницу
//ReactDOM.render(elem, document.getElementById('root'));


//Компоненту - по сути функции, которые могут возвращать  jsx  элементы
// Компоненты должны начинаться с большой буквы

// переделаем предыдущий фрагмент elem через элементы:

const Header = () => {
    // есть защита от вредоносного кода, апример следующий код просто выведет скрипт scr в виде строки
    //const scr = '<script>alert("error!")</script>';
    //return <h2>{scr}</h2>
    return <h2>Hello Word!</h2>
}
const Field = () => {
    const holder = "Enter here";
    const styledField = { // можно напрямую прописывать css
        width: '300px'
    }
    return <input 
        style = {styledField}
        type = "text" 
        placeholder = "{holder}"
        autoComplete = "" // Необходимо использовать кэмелКейс
        className = "first" // Если нужно задать класс в верстке на JSX то необходимо использовать className, а не class
        htmlFor = "" // если нужно использовать for (например в label), то необходимо использовать htmlFor 
    />
}
const Btn = () => {
    //return <button />
    
    // Что бы поместить переменную во внутрь верстки нужно использовать структуру {название} 
    //const text = "Log in"; 
    //return <button>{text}</button>
    
    
    // Так можно помещать и функции и элеенты, и выражения например
    //const res = () => {return "log in, pls"} 
    //return <button>{res()}</button>

    // Элементы 
    // const p = <p>Log in</p>
    //return <button>{p}</button>

    // Если мы хотим добавить логики, то нам необходимо использовать тернарный оператор, 
    // Например проверим залогинен ли пользователь:
    const logged = true;
    const text = "Log in"; 
    return <button>{logged ? 'Enter' : text}</button>

    //Но таким образом нельзя помещать Объекты!!!!:
    // const obj = {}
    //return <button>{obj}</button> // Выдаст ошибку
    
}

// Элемент  App собирает в себя все предыдущие элементы
const App = () => {
    return (
        <div>
            <Header />
            <Field />
            <Btn />
        </div>
    )
}
//Что бы использовать компонент, а не элемент необходимо использовать структуру: <Название_компонента />

//рендерим элемент на страницу
ReactDOM.render(<App />, document.getElementById('root'));





