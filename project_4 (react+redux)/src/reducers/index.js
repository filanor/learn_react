import {combineReducers} from 'redux';
import filterReducer from './filter';
import todosReducer from './todos';


const reducer = combineReducers({
    todosReducer,
    filterReducer
});
export default reducer;