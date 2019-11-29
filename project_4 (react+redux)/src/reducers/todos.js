const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [...state, {
                id: state.length+1,
                text: action.payload,
                status: false
            }]
            
        case 'TOGGLE_TODO':
            return state.map(item => +item.id === +action.payload ? {...item, status: !item.status } : item);

        default:
            return state;
    }
}

export default todosReducer;