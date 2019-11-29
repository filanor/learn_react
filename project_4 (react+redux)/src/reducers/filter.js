const initialFilter = {filter: false};

const filterReducer = (state = initialFilter, action) => {
    switch(action.type){
        case 'FILTER_TOGGLE':
            return {filter: !state.filter}
        default:
            return state;
    }
}

export default filterReducer;