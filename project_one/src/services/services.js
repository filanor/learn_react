export default class Services {
    getDate = () => {
        const date = new Date();
        return `${date.getDay()}:${date.getMonth()}:${date.getFullYear()}`
    }

    isEmpty = (obj) => {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    generateId = () =>{
        const index = Math.random();
        return `f${((+new Date)*index).toString(16)}`;
    }

    recorEnd(n){
        const words = ['запись', 'записи', 'записей'];
        return words[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
    }

    changeArr = (what, arr, id) => {
        const index = arr.findIndex(elem => elem.id === id);

        const old = arr[index];
        const newItem = {...old}; // по свойству spread оператора то что идет после него перезапишет данные 
        newItem[what] = !old[what];                                       // с одинаковым названием (like)
        const newArr = [...arr.slice(0, index), newItem, ...arr.slice(index+1)];
        return newArr;
    }
}