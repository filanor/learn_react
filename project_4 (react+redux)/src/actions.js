// Вспомогательные функции
const toggleTODO = (id) => {
    return {
         type: 'TOGGLE_TODO', 
         payload: id
        }  
};

const addedTODO = (text) => {
    return {
        type: 'ADD_TODO', 
        payload: text
    }
};

const filter = () => {
    return {
        type: 'FILTER'
    }
}

export {
    toggleTODO,
    addedTODO,
    filter
};
