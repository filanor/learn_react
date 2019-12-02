const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}


const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
        justOrder: false
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}

const filterOn = (filter) => {
    return {
        type: 'FILTER_ON',
        filter
    }
}
const filterOff = () => {
    return {
        type: 'FILTER_ON',
        filter: ''
    }
}

const addedToCart = (/*id*/item) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: /*id*/item
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const orderDone = () => {
    return {
        type: 'ORDER_DONE'
    }
}


export {
    menuLoaded,
    menuRequested,
    menuError, 
    filterOn,
    filterOff,
    addedToCart, 
    deleteFromCart,
    orderDone
};