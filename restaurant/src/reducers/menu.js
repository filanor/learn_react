const initialState = {
    menu: [],
    loading: true,
    error: false,
    filter: ''
}

const menuReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false,
                filter: ''
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false,
                filter: ''
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                error: true,
            };
        case 'FILTER_ON':
            return {
                ...state, 
                filter: action.filter
            }
        case 'FILTER_OFF':
            return {
                ...state, 
                filter: false
            }
        default: 
            return state;
    }
}

export default menuReducer;