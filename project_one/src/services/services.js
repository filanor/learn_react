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
}