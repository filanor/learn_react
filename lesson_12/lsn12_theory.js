/**
 * 
 * ********************************************
 *                Хуки в React
 * ********************************************
 * 
 * Ссылки
 * 
 * Документация по хукам: https://learn-reactjs.ru/core/hooks/introduction
 * Создание своих хуков: https://learn-reactjs.ru/core/hooks/custom-hook
 * Неплохая статья с примерами: https://www.robinwieruch.de/react-hooks
 * 
 * 
 *  Хуки - технология, которая позволяет перехватить стандартное поведение какого-то действия и изменить его
 * 
 * Используются по желанию
 * Обратносовместимы
 * Классовые компоненты не исчезают
 * 
 * По простому хуки - функции, которые позволяют не создавать классовые компоненты.
 *  Мы создавали классовые компоненты, когда нам было нужно внетреннее состояние объекта, но теперь етсь хук useState:
 */

import React, {useState} from 'react';

function App() {
    //дестриктурируем массив. Хук useState возвращает массив (count состояние позиции счетчика, 
    //setCount - кастомная функция, которая  отвечает за изменение счетчика).
    // В useState(начальное_состояние) Начальным состоянием может быть все что угодно.  
    const [count, setCount] = useState(0); // теперь у нашей функции есть счетчик (переменные можно называть как угодно)
    const [data, refreshData] = useState([{name: 'Anton', sex: 'male'}]) // Если нужно несколько стейтов, то надо несколько раз использовать useState

    return(
        <div>
            <p>Вы кликнули {count} раз</p>
            <button     
                onClick = { () => setCount(count+1) }>
                    Кликни меня
            </button>
            
            {/* <div>Name: {data[0].name}, sex: {data[0].sex}</div> */}
            
            {data.map(item => {
                return(
                    <div>Name: {item.name}, sex: {item .sex}</div>
                );
            })}

            <button
                onClick = { () => refreshData( data => ([...data, {name: 'Alex', sex: 'male'}]) ) }> 
                    Добавить данные
            </button>
        </div>
    )
    //в функцию refreshData приходит предыдущее состояние, и далее при помощи spread оператора формируется новый массив,
    // включающий в себя прошлые данные + новые
}



/**
 * 
 * * ********************************************
 *          Хуки эффектов
 * 
 * 
 * 
 * Используя useEffect мы сообщаем реакту, что наш компонент должен что-то сделать после отрисовки
 */
import React, {useState, useEffect} from 'react';

function App() {
    const [count, setCount] = useState(0); 
    const [data, refreshData] = useState([{name: 'Anton', sex: 'male'}]) 

    // Мы передаем хуку функцию (чаще всего стрелочную). Хук вызывается каждый раз, когда отрисовывается (обновляется) DOM дерево
    // useEffect комбинация появления, обновления и исчезновения (componentDidMount....)
    useEffect( () => {
        //console.log(Math.random());
        updateChar();
        let timerId = setInterval(this.updateChar, 15000);
        return () => {
            clearInterval(timerId)
        }
    });

    return(
        <div>
            <p>Вы кликнули {count} раз</p>
            <button     
                onClick = { () => setCount(count+1) }>
                    Кликни меня
            </button>
            
            {data.map(item => {
                return(
                    <div>Name: {item.name}, sex: {item .sex}</div>
                );
            })}

            <button
                onClick = { () => refreshData( data => ([...data, {name: 'Alex', sex: 'male'}]) ) }> 
                    Добавить данные
            </button>
        </div>
    )
}

// Вызывайте Хуки только из компонентов-функций. Иначе будет ошибка 
// Вызывайте Хуки только на верхнем уровне.Иначе будет ошибка
// такое использование выдаст ошибку
if(data){
    useEffect( () => {console.log(date);} )
}
//но  следующий пример сработает нормально
useEffect( () => {
    if(data){
        console.log(date);
    }
} );


//Хук useEffect может принимать второй аргумента может принимать ту часть, которую необходимо проверить на предыдущий state 
useEffect( ()=> {
    getData()
        .then( (data) => {
            updateList(data)
        })
        .catch( (error) => {onError(error.status)});
}, [itemList]);
// но это не поможет избавиться от бесконечного цикла, так как может сравнивать только примитивы, но есть выход: 
// если передать пустой массив, то хук useEffect будет вызываться только при создании и обновлении компонета

// В качестве реального примера сделан рефакторинг itemList в GOT