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
	console.log('searchForItem', rawTerm, term);
	return function (dispatch, getState, SC) {
		console.log('action searchForItem');
		console.log(term);
		SC.get('/tracks', {
			q: term,
			limit: 6,
			linked_partitioning: 1
		}).then(function (tracks) {
			/* 			SC.stream(`/tracks/${tracks.collection[0].id}`).then(function (player) {
							player.play();
						}); */
			dispatch(updateSearchBox(term));
			dispatch(updateSearchResult(tracks.collection));
			dispatch(historyPush({id: term, title:term}));
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
	return function (dispatch) {
		dispatch(setCurrentTrack(track));
		
	};
}

export function setCurrentTrack(track, SC) {
	console.log('action setCurrentTrack', track);
	return function (dispatch, getState, SC) {
		var track_url = track.permalink_url; //track.permalink_url
		SC.oEmbed(track_url, { auto_play: true, maxheight:166 })
			.then(function (oEmbed) {
				console.log('oEmbed response: ', oEmbed);
				return oEmbed;
			})
			.then((oEmbed) => {
				console.log('odispatch ', oEmbed);
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