const initialState = {
    items: [],
    totalPrice: 0,
    justOrder: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_REQUESTED':
            return {...state, justOrder: false};
        case 'ITEM_ADD_TO_CART':
            const {id} = action.payload;
            const orderedItem = action.payload;
            
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            } 
            // товара раньше не было в корзине
            // const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: orderedItem.title,
                price: orderedItem.price,
                url: orderedItem.url,
                id: orderedItem.id,
                qtty: 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx)
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qtty'];
            return {
                ...state, 
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ], 
                totalPrice: state.totalPrice - price
            }
        case 'ORDER_DONE':
            return {
                ...state, 
                items: [],
                justOrder: true,
                totalPrice: 0
            }
        default: 
            return state;
    }
}

export default cartReducer;