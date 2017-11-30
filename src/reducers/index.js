import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import currentTrackReducer from './currentTrackReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
	searchResult: searchResultReducer,
	curruntTrack: currentTrackReducer,
	history: historyReducer
});

export default rootReducer;
