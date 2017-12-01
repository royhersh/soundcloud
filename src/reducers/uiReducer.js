import * as actions from '../actions/types';
const initialState = {
	searchBox: '',
	nextHref: null
};

export default (state = initialState, action) => {
	switch (action.type) {
	case actions.UPDATE_SEARCH_BOX:
		return { ...state, searchBox: action.payload };
		
	case actions.UPDATE_NEXT_HREF:
		return { ...state, nextHref: action.payload };
	default:
		return state;
	}
};