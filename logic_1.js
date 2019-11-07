/*

Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'array' и 'func'
'array' - массив
'func' - фильтрующая функция
Условия:
Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'
Нельзя использовать функции для работы с массивами, методы и циклы.

*/


/* Метод 1. с использованием splice */
function isSomeTrue(array, func) {
    if(array.length == 0){
        return false;      
    } 
    return isNumber(array[0]) ? true : isSomeTrue(array.splice(1), func)
    
}

/* Метод 2. через переопределение length */
function isSomeTrue(array, func) {
    if(array.length == 0){
        return false;      
    } else if (isNumber(array[array.length-1])){
        return true;
    } else{
        array.length = array.length - 1;
        return isSomeTrue(array, func)
    }
}

let allNumbers= [1, 2, 2, 4, 5, 6, 7, 'Hello'],
    someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
    noNumbers = [1, 'здесь', 'Hello', 'Hello'],
    emptNumbers = [];

function isNumber(val) {
    return typeof val === 'number';
}

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber));
console.log(isSomeTrue(emptNumbers, isNumber));