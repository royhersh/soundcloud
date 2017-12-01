import * as actions from '../actions/types';
import _ from 'lodash';

const HISTORY_SIZE = 5;

export default (state = [], action) => {
	switch (action.type) {
	case actions.HISTORY_PUSH: {
		// debugger
		let newHistory = [...state]; // will hold new history object
		// check if item already in history and return it's index or -1 if not exist
		const newItemIndex = _.findIndex(state, action.payload);
		if (newItemIndex !== -1) {
			newHistory.splice(newItemIndex, 1);
		}
		// push new item at the begining of the array
		newHistory = [action.payload].concat([...newHistory]);
		// slice the array if it's bigger than HISTORY_SIZE
		if (newHistory.length === HISTORY_SIZE + 1) {
			return newHistory.slice(0, -1);
		}
		// return new history object
		return newHistory;
	}

	default:
		return state;
	}
};