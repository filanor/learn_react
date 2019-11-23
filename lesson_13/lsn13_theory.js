import {createStore} from 'redux'


//const initialState = 0; заменили на параметр по умолчанию

// если state еще undefind то будет параметр по умолчанию
// Функция редюсер должна быть простой функцией
const reducer = (state = 0, action) => {
    // if (action.type === 'INC') {
    //     return state + 1;
    // }
    // return 0;
    // Экшенов может быть много, поэтому лучше switch
    switch (action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.value;
            //return state + Math.floor(Math.random() * 10) так написать не можем, так как это сделает редюсер не чистой функцией
        default:
            return state;
    }

}

// const inc = () => {
//     return {
//         type: 'INC'
//     }
// } ниже написан сокращенный вариант этой функции:
const inc = () => ({type: 'INC'}); // это actionCreater
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});





const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', ()=>{
    store.dispatch( inc() )
    //store.dispatch({type: 'INC'})
});

document.getElementById('dec').addEventListener('click', ()=>{
    store.dispatch( dec() )
    //store.dispatch({type: 'DEC'})
});

document.getElementById('rnd').addEventListener('click', ()=>{
    const value = Math.floor(Math.random() * 10)
    store.dispatch( rnd(value) )
    //store.dispatch({type: 'RND', value})
});


const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);


// const store = createStore(reducer); // создаем хранилище

// // функция подписка, которая будет вызывать переданную ей функцию при каждом изменении store
// store.subscribe( ()=> { 
//     console.log(store.getState());
// })

// store.dispatch({type: 'INC'});   //dispatch() нужет чтобы запустить редюсер с акшеном который мы запустили
// store.dispatch({type: 'INC'}); 
// store.dispatch({type: 'INC'}); 
// store.dispatch({type: 'INC'}); 



// let state = reducer(undefined, {}); // Создаем state
// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);