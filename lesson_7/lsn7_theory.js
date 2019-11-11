/**
 * ===============================================================
 *           Начинаем работать с сервером. Fetch API
 * ===============================================================
 * 
 * JSONPlaceholder
 * https://jsonplaceholder.typicode.com/
 * 
 * Fetch API
 * https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
 * 
 * GOT API
 * https://anapioficeandfire.com/
 * 
 * Async/await
 * https://habr.com/ru/company/ruvds/blog/326074/
 * 
 * public free API
 * https://github.com/public-apis/public-apis
 * 
 * 
 * 
 * 
 * React - UI библиотека и ничего не знает о сервере
 * 
 * 
 * API - Application Programing Inteface
 * позволяет выполнять действия и получать данные. И позволяет выполнять интеграцию
 * одного приложения с другим
 * 
 * 
 * * JSONPlaceholder - для теста
 *  Очень часто от сервера данные приходят в  JSON
 * 
 * Fetch - вырос из концепции jQuery и полностью заменяет ajax. Использует промисы и позволяет полностью уйти от колбеков 
 */

let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'}


// Получим данные с сервера используя fetch
 fetch('https://jsonplaceholder.typicode.com/posts/1') // делаем запрос к серверу и получаем в ответ промис. Обработаем его:
    .then( (response) => response.json()) // данная функция вернет ответ от сервера, который будет переработан в формат json.
                                        // json() трансформирует данные и тоже возвращает промис, так как на данном этапе мы получили
                                        // только статус 200, но данные могут быть еще не доступны
     .then( (myJson) => console.log(myJson) ) // Важно понимать что на прошлом этапе только промис, и обработать мы его смогли только сейчас


// Теперь попробуем отправить данные на сервер. Для этого нужно передать в flex 2 параметра: url куда отправлять и 
// объект с настройками 
fetch(url, {
        method: 'POST',                         // Метод
        body: JSON.stringify(data),         // Данные. Так как это объект js, преобразуем его в Json
        headers: {                          // Заголовки
            'Content-Typr': 'application/hson'
        }
    })
    .then( (response) => response.json() )
    .then( (myJson) => console.log('Success', myJson) )
    .catch(error => console.error('Error', error)); // Обрабатываем ошибку






/**================================================================================ */
//                    Ассинхронность    /   async/await
/**================================================================================ */

//Напишем функцию, которая будет реализовавыть fetch запрос
// const getResource = (url) => {
//     const res = fetch(url),
//         some = res.json();
    
//     return some
// }

// getResource('https://jsonplaceholder.typicode.com/todos/1')
//     .then( (myJson) => console.log('Success', myJson) )
//     .catch(error => console.error('Error', error));

// Такой код фыдаст ошибку, так как на данном этапе наша функция синхронна, а fetch асинхронен. Получается что при выполнении
// функции отправится запрос fetch и продолжится выполнение функции без ожидания ответа и получим ошибку на res.json()
// Это можно исправить с помощью async/await:

const getResource = async (url) => { // говорим что функция асинхронна
    const res = await fetch(url),     // просим подождать выполнения fetch
        some = await res.json();      // res.jon тоже асинхронна, поэтому прописываем await и присвоение some будет ждать пока выполнится команда res.json()
    
    return some
}

getResource('https://jsonplaceholder.typicode.com/todos/1')
    .then( (myJson) => console.log('Success', myJson) )
    .catch(error => console.error('Error', error));

//Связка async/await всегда работает в связке - нельзя использовать await без async



/**================================================================================ */
//                    обработка ошибок
/**================================================================================ */

const getResource2 = async (url) => { 
    const res = await fetch(url);  // res - ответ от сервер и у неог есть метод ok, позволяющий проверить что мы получили от сервера

    if(!res.ok) { // если мы получили ошибку, то обработаем ее:
        throw new Error(`Could not fetch ${url}, status ${res.status}`)
    }

    const some = await res.json();      
    
    return some
}

getResource2('https://jsonplaceholder.typicode.com/todos/1')
    .then( (myJson) => console.log('Success', myJson) )
    .catch(error => console.error(error));