import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import searchResultReducer from './searchResultReducer';
import currentTrackReducer from './currentTrackReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
	ui: uiReducer,
	searchResult: searchResultReducer,
	currentTrack: currentTrackReducer,
	history: historyReducer
});

export default rootReducer;
