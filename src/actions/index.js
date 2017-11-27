import * as actions from '../actions/types';

export function authUser(userName) {
	return {
		type: actions.AUTH_USER,
		payload: { userName }
	};
}
