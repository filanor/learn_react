const initialState = {
    search: '',
    country: ''
}
const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FILTER_SEARCH':
            return
        case 'FILTER_COUNTRY':
            return {
                ...state, 
                country: action.filter
            }
        default:
            return state;
    }
}

export default filterReducer; 