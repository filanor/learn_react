const initialState = {
    catalog: [],
    bestsellers: [],
    goods: [],
    loading: true,
    error: false,
    formSended: false
}

const catalogReducer = (state = initialState, action) => {
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
        case 'GOODS_LOADED':
            return { 
                ...state,
                goods: action.payload,
                loading: false,
                error: false
            }
        // case 'GOODS_REQUESTED':
        //     return { 
        //         ...state,
        //         goods: state.goods,
        //         loading: false,
        //         error: false
        //     }
        // case 'GOODS_ERROR':
        //     return {
        //         ...state, 
        //         goods: state.goods,
        //         loading: false,
        //         error: true
        //     }
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
        case 'FORM_TOGGLE':
            return {
                ...state, 
                formSended: !state.formSended
            }
        default:
            return state;
    }
}

export default catalogReducer;