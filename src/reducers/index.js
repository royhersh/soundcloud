import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';

const rootReducer = combineReducers({
	searchResult: searchResultReducer
});

export default rootReducer;
