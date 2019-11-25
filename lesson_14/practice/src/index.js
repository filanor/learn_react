import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// import {dec, inc, rnd} from './actions';
// импортируем эти данные по другому:
// import * as actions from './actions'; перенесен в другой файл
import React from 'react'; // Добавляем реак
import ReactDOM from 'react-dom';
import App from './components/app';
//import Counter from './counter'; - убираем, так как он экспортируется в App



const store = createStore(reducer);
// store будет связан с компонентами за счет функции connect (она используется в Компонентах)



//перенесен в другой файл
//const {dispatch} = store; // деструктурируем функцию dispatch is store


// Функция, которая генерирует и возвращает другую функцию  (...args)=>{} может быть неопределенное
// количество параметров, поэтому используем spread оператор, но такая функция уже есть в redux:
// bindActionCreators, поэтому это просто пример для наглядности
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }


// const incDispatch = () => dispatch(inc()); // Вспомогательные функции для упрощения кода
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (value) => dispatch(rnd(value));
// Перепишем эти функции с использованием bindActionCreator
// const incDispatch = bindActionCreators(inc, dispatch);


// Но у нас опять повторяющийся код:
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// 


//bindActionCreators возвращает объект, поэтому сразу же его диструктурируем
// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//     {   // Объект содержит в себе название и функция (название: функция)
//         incDispatch: inc,
//         decDispatch: dec,
//         rndDispatch: rnd
//     }, 
//     dispatch
// );
//incDispatch: inc, равносильно 
//incDispatch: ()=>{dispatch(inc())}

// но мы можем еще сократить наш код:

//const {inc, dec,rnd} = bindActionCreators(actions, dispatch);  

//const {inc, dec,rnd} - это уже обернутые в dispatch функции, а не те что мы импортировали 


// это будет работать, так как в импортированном экшене сейчас находится:
// actions = {
//     inc: inc,
//     dec: dec,
//     rnd: rnd
// }



// После этих улучшений обработчики событий не связаны ни с реактом, ни с редаксом, они просто принимают
// функцию. Таким образом (+ перенос функций в отдельные файлы) мы отделили view от логики&

// Так же, начав использовать react мы можем опрать всю работу с DOM, она осуществляется в компоненте 
// Counter
// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('rnd').addEventListener('click', ()=>{
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
// });
// Старый вариант
// document.getElementById('inc').addEventListener('click', ()=>{
//     store.dispatch( inc() )
// });





// const update = () => {
//     //document.getElementById('counter').textContent = store.getState();
//     ReactDOM.render(<Counter 
//         counter = {store.getState()} 
//         inc = {inc}
//         dec = {dec}
//         rnd = { () => {
//             const value = Math.floor(Math.random() * 10);
//             rnd(value);
//         }}/>, document.getElementById('root') );
// }

// const update = () => {
//     ReactDOM.render(
//         <Provider store = {store}> 
//             <App/>
//         </Provider>
//         , document.getElementById('root'));
//     )
// }
// update();
// store.subscribe(update);
// Механизм отслеживания уже включен в компонент Provider, так что мы можем написать:
ReactDOM.render(
    <Provider store = {store}> 
        <App/>
    </Provider>
    , document.getElementById('root')
);
