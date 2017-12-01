import * as actions from '../actions/types';
const initialState = {
	track: null
};

export default (state = initialState, action) => {
	switch (action.type) {
	case actions.SET_CURRENT_TRACK:
		console.log('reducer action ', action);
		return {
			track: action.payload
		};
	case actions.SHOW_PLAYER:
		return {
			track: { ...state.track, showPlayer: true }
		};
	default:
		return state;
	}
};