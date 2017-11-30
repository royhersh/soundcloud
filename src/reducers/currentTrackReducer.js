import * as actions from '../actions/types';
export default (state = [], action) => {
	switch (action.type) {
	case actions.UPDATE_SEARCH_RESULT:
		return state;

	default:
		return state;
	}
};