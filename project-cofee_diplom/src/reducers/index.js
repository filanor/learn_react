import { combineReducers } from 'redux';
import catalogReducer from './catalogReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({catalogReducer, filterReducer})

export default reducer;
