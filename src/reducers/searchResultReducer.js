import * as actions from '../actions/types';
export default (state = [], action) => {
	switch (action.type) {
	case actions.UPDATE_SEARCH_RESULT:
		return action.payload.result;

	default:
		return state;
	}
};