import * as actions from '../actions/types';

export function updateSearchBox(value) {
	return {
		type: actions.UPDATE_SEARCH_BOX,
		payload: value
	};
}


export function searchForItem(rawTerm) {
	let term;
	// if term is object then it is comming from history container, threfore we convert it to string
	if (typeof rawTerm === 'object') {
		term = rawTerm.title;
	} else {
		term = rawTerm;
	}
	return function (dispatch, getState, SC) {
		SC.get('/tracks', {
			q: term,
			limit: 6,
			linked_partitioning: 1
		}).then(function (tracks) {
			
			dispatch(updateNext(tracks.next_href));
			dispatch(updateSearchBox(term));
			dispatch(updateSearchResult(tracks.collection));
			dispatch(historyPush({ id: term, title: term }));
		});

	};
}

export function updateNext(href) {
	return {
		type: actions.UPDATE_NEXT_HREF,
		payload: href
	};
}

export function fetchNextResult() {
	return function (dispatch, getState) {
		const href = getState().ui.nextHref;
		fetch(href)
			.then((res) => res.json())
			.then((tracks) => {
				dispatch(updateNext(tracks.next_href));
				dispatch(updateSearchResult(tracks.collection));
			});
	};
}

export function updateSearchResult(collection) {
	return {
		type: actions.UPDATE_SEARCH_RESULT,
		payload: { result: collection }
	};
}

export function chooseTrack(track) {
	return function (dispatch) {
		dispatch(setCurrentTrack(track));

	};
}

export function setCurrentTrack(track) {
	return function (dispatch, getState, SC) {
		var track_url = track.permalink_url; //track.permalink_url
		SC.oEmbed(track_url, { auto_play: true, maxheight: 166 })
			.then(function (oEmbed) {
				return oEmbed;
			})
			.then((oEmbed) => {
				dispatch({
					type: actions.SET_CURRENT_TRACK,
					payload: { ...track, embeddedPlayer: oEmbed.html }
				});
			});

	};

}

export function historyPush(track) {
	return {
		type: actions.HISTORY_PUSH,
		payload: track
	};
}

export function showPlayer() {
	return {
		type: actions.SHOW_PLAYER
	};
}