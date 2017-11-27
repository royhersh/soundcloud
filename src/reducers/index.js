import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	data: (state = [], action) => state
});

export default rootReducer;
