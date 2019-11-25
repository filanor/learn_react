import {createStore} from 'redux';
import { get } from 'http';
const url = "http://localhost:3000/numbers";

// редюсер
const counter = (state = 0, action) => {
    switch (action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return 0;
        case 'DNL':
            return +action.dnlVal;
        default:
            return state;
    }
}


//-----------------------------------------
//  создаем хранилище
let store = createStore(counter);

// Вспомогательные функции
const inc = () => ( {type: 'INC'} );
const dec = () => ( {type: 'DEC'} );
const res = () => ( {type: 'RES'} );
const upl = () => ( {type: 'UPL'} );
const dnl = (dnlVal) => ( {type: 'DNL', dnlVal} );



//-----------------------------------------
//  Проверяем нажатия кнопок
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch( inc() );
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch( dec() );
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch( res() );
});

document.getElementById('upl').addEventListener('click', async () => {
    const value = store.getState();
    const len = await getSize();
    const obj = {"const": value+'', "id": len+1};
    setResourse(obj);  
});

document.getElementById('dnl').addEventListener('click', async () => {
    const id = Math.floor( 1 + Math.random() * 3 );
    const value = await getVal(id);
    store.dispatch( dnl(value) );
})


//-----------------------------------------
//  функция обновляет каунтер
const update = () =>{
    document.getElementById('counter').textContent = store.getState();
}

// при каждом изменении
store.subscribe(update)


// Записываем значение в json
const setResourse = async (obj) => {
    let response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });
    if (!response.ok){
        throw new Error('json error'); 
    }
}

// размер массива json
const getSize = async () => {
    const resource = await getResource();
    return resource.length;
}

// Значение по id
const getVal = async (id) => {
    const result = await getResource();
    const val = result[id - 1];
    return val["const"];
}

// получаем данные из json
const getResource = async () => {
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new Error('json error'); 
    }
    return await resp.json();
}