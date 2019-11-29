const initialState = [
    {id: 1, text:"пропро", status: true},
    {id: 2, text:"Япришел", status: false}
]
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [...state, {
                id: state.length,
                text: action.payload,
                status: false
            }]
            
        case 'TOGGLE_TODO':
            console.log('TOGGLE_TODO');
            return state.map(item => +item.id === +action.payload ? {...item, status: !item.status } : item);
        default:
            console.log('sadfsad');
            return state;
    }
}

export default reducer;