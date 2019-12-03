// import { combineReducers } from 'redux';
// import coffeeReducer from './coffeeReducer';

// const reducer = combineReducers({coffeeReducer})

// export default reducer;


const initialState = {
    catalog: [],
    bestsellers: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'BEST_REQUESTED':
            return {
                ...state,
                bestsellers: state.bestsellers,
                loading: true,
                error: false
            }
        case 'BEST_LOADED':
            return {
                ...state,
                bestsellers: action.payload,
                loading: false,
                error: false
            }
        case 'BEST_ERROR':
            return {
                ...state, 
                bestsellers: state.bestsellers,
                loading: false,
                error: true
            }
        case 'CATALOG_REQUESTED':
            return {
                ...state,
                catalog: state.catalog,
                loading: true,
                error: false
            }
        case 'CATALOG_LOADED':
            return {
                ...state,
                catalog: action.payload,
                loading: false,
                error: false
            }
        case 'CATALOG_ERROR':
            return {
                ...state, 
                catalog: state.catalog,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;