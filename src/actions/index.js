import * as actions from '../actions/types';

export function searchForItem(term) {
	console.log('action searchForItem');
	return function (dispatch, getState, SC) {
		SC.get('/tracks', {
			q: term,
			limit: 6,
			linked_partitioning: 1
		}).then(function (tracks) {
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
