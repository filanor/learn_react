const initialState = {
    items: [],
    loadin: true,
    error: false
}
const coffeeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'BEST_LOADED':
            return
        default:
            return state;
    }
}

export default coffeeReducer;