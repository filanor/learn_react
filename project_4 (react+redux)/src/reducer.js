const initialState = [{is: 1}]
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [...state, {
                id: state.length,
                text: action.text,
                status: false
            }]
            
        case 'TOGGLE_TODO':
            return state.map(item => item.id === action.id ? {...item, state: !item.state } : item);
        default:
            return state;
    }
}

export default reducer;