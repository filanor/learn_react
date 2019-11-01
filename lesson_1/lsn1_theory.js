/* 
Урок 1. Знакомимся с React.js. Стандарты ES6-8
----------------------------------------------

Ссылки: 
Гайд по ES6
https://habr.com/post/305900/

React
https://reactjs.org/

React на русском
https://learn-reactjs.ru/home

Фундаментальные принципы React
https://goo.gl/3jdmHd

Virtual DOM
https://habr.com/post/256965/
https://medium.com/@abraztsov/how-virtual-dom-work-567128ed77e9

Кто использует React сейчас
https://github.com/facebook/react/wiki
*/


let answer = ['Anton', 'AnnA', 'HeLLo'];


// map() преобразует каждый элемент массива в зависимости от того какой callback мы ему передаем
// Следующие 2 записи аналогичны, но в первой исользуется стрелочная функция одной строкой
answer = answer.map( (item) => item.toLowerCase() );
answer2 = answer.map( (item) =>{
    return item.toLowerCase();
});





//====================================================================================================
// Интерполяция вывод текста.. ${}  - переменная
console.log(`Пользователь ${name}, ${age} лет`)

console.log(answer);
console.log(answer2);




//====================================================================================================
// REST-параметр (...) - групирует в массив аргументы, которые не были переданыф как параметры
// благодаря этому мы можем получать неограниченное количество аргументов
function max(...numbers){
    console.log(numbers);
}
max(3, 4, 67, 0);      // Результат [3, 4, 67, 0]

// REST-параметр можно комбинировать с обычными аргументами
function max(a, b, ...numbers){
    console.log(numbers);
}
max(3, 4, 67, 0);  // результат [67, 0],  так как  3 поместилось в a, 4 в и

// REST-оператор всегда должен быть в конце аргументов и может быть только один
function max(a, b, ...numbers, c){ // выдаст ошибку
    console.log(numbers);
}



//====================================================================================================
//Spread-оператор - выполняет обратные относительно REST функции: разворачивает массив в аргументы
const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(1, ...arr1, 3, ...arr2); // массивы развернутся и передадутся только значения const 
                                            // = Math.max(1, 1, 2, 5, 3, 43, 2, 6)
console.log(res);




//====================================================================================================
//Object spread-оператор - спред оператор для объектов
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
}

// Допустим нужно объединить 2 объекта в 1, при этом заменив в user значения, на те что есть в admin
//const res = Object.assign(user, admin);
//console.log(res); // { name: 'admin', pass: 'root', rights: 'user' }
//console.log(user);// { name: 'admin', pass: 'root', rights: 'user' }
// таким образом мы перезаписали объект user, 

// что бы этого не делать, добавим пустой объект
const res2 = Object.assign({}, user, admin);
console.log(res2); // { name: 'admin', pass: 'root', rights: 'user' }
console.log(user); // { name: 'default', pass: 'qwerty', rights: 'user' }

// В ES8 все стало проще
const res3 = {...user, ...admin};
console.log(res3); // { name: 'admin', pass: 'root', rights: 'user' }





//====================================================================================================
// Новый синтаксис объектов.
// Раньше объекты записывались:
const x = 25, y = 10;
const coordsOld = {
    x: x, 
    y: y
}
console.log(coordsOld);

// В новых редакциях можно:
//const x = 25, y = 10;
const coords = {
    x, // эквивалентно x: x
    y
}
console.log(coords);
// Если свойство объекта называется так же как и переменная, которуя мы хотим в нее поместить,
// то можно просто оставить 1 название

// Изменения коснулись и методов
const coords2 = {x, y,
    calcSumm: function() { // Старое написание
        return this.x+ this.y;
    },
    calcSq() {
        console.log(this.x * this.y)
    }
}
coords2.calcSq(); // выведет 250

const avatar = 'photo';
const res4 = {...user, ...admin, avatar}; // аналогично const res4 = {...user, ...admin, avatar: avatar};
console.log(res4); // { name: 'admin', pass: 'root', rights: 'user', avatar: 'photo' }





//====================================================================================================
// Деструкторизация
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};
const{name, pass, rights} = user;
console.log(name, pass, rights); // default qwerty user

// Усложним 
const user2 = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};
// вытащим вложенные объекты с  помощью деструктуризации
const {name: {first, second}, pass, rights} = user2;
console.log(first, second, rights); // Sam Smith user




//====================================================================================================
// Паттерн js - важно запомнить

function connect({ // одновременно используем деконстуктуризацию
    host = 'localhost', // и значения по умолчанию
    port = 3000, 
    user = 'default'}) {

        console.log(`host: ${host}, port: ${port}, user: ${user}`) // интерполяция
}

connect({
    port: 200, 
}) // host: localhost, port: 200, user: default port перезаписался

connect({
    port: 100, 
    host: 'sdsd'
}) // host: sdsd, port: 100, user: default переписался host и port
/* Таким образом, не важно, в каком порядке пользователь передает параметры, 
Так как мы используем деструктуризацию в connect. И он может пропустить часть 
параметров, так как мы используем параметры по умолчанию
*/ 

// но 
connect() //вызовет ошибку

/* что бы этого избежать мы можем объекту, который получает функция присвоить значение 
по умолчанию - пустой объект (ранее присваивали значение по умолчанию свойствам объекта)
*/

function connect2( { 
    host = 'localhost', 
    port = 3000, 
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`) // интерполяция
}
connect2() // host: localhost, port: 3000, user: default
// Нужно запомнить этот паттерн






//====================================================================================================
// Диструктуризация массивов
const numbers = [1, 2, 3, 4, 2];
// [], а не  {}, так как тут массив, а не объект

const [a, b, c] = numbers;
console.log(a, b, c) // 1 2 3

// Мы можем пропускать какие-то элементы:
const [, , d] = numbers;
console.log(c); // 3

// А если массив в массиве:
const numbers2 = [[3, 5],[6,0]]; 
numbers2[0][0] //- так раньше мы могли получить доступ к 3
const [[a, b], [c, d]] = numbers2 // - теперь можем использовать диструктуризацию
console.log(a, b, c, d) //3 5 6 0



// Пример диструктуризации
const country = {
    name: 'England', 
    population: 2000000,
    gender: {
        male: ['15%', '40$'],
        female: ['16%', '29%']
    }
}

//country.gender.male[0];

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country
// на выходе получаем 4 переменных: maleUnder18, maleAdult, femaleUnder18, femaleAdult
console.log(maleUnder18, femaleAdult); // 15% 29%

// Такой подход позволит удобно работать с объектами и помещать их элементы в переменные