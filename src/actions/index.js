import * as actions from '../actions/types';

export function searchForItem(term) {
	console.log('action searchForItem');
	return function (dispatch, getState, SC) {
		SC.get('/tracks', {
			q: term,
			limit: 6,
			linked_partitioning: 1
		}).then(function (tracks) {
/* 			SC.stream(`/tracks/${tracks.collection[0].id}`).then(function (player) {
				player.play();
			}); */
			dispatch(updateSearchResult(tracks.collection));
		});

	};
}
export function updateSearchResult(collection) {
	console.log('updateSearchResult - collection', collection)
	return {
		type: actions.UPDATE_SEARCH_RESULT,
		payload: { result: collection }
	};
}

export function chooseTrack(track) {
	console.log('action - chooseTrack', track);
	return function (dispatch, getState, SC) {
		dispatch(setCurrentTrack(track, SC));
		dispatch(historyPush(track));
	};
}

export function setCurrentTrack(track, SC) {
	return {
		type: actions.SET_CURRENT_TRACK,
		payload: track,
		meta: SC
	};
}

export function historyPush(track) {
	return {
		type: actions.HISTORY_PUSH,
		payload: track
	};
}