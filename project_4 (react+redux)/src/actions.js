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

const filterToggle = () => {
    return {
        type: 'FILTER_TOGGLE'
    }
}

export {
    toggleTODO,
    addedTODO,
    filterToggle
};
