const initialState = {
    bestsellers: [],
    loading: true,
    error: false,
    formSended: false
}
const coffeeReducer = (state = initialState, action) => {
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
        case 'FORM_TOGGLE':
            return {
                ...state, 
                formSended: !state.formSended
            }
        default:
            return state;
    }
}

export default coffeeReducer;