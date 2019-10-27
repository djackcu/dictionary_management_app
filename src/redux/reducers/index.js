import { combineReducers } from 'redux';
import dictionaries from './dictionariesReducer';

const rootReducer = combineReducers({
	dictionaries
});

export default rootReducer;
