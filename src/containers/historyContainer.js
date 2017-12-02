import React from 'react';
import { connect } from 'react-redux';
import { searchForItem } from '../actions';

import TracksList from '../components/TracksList';

class HistoryContainer extends React.Component {

	render() {
		const { historyList, searchForItem } = this.props;
	
		return (
			<div className="history container">
				<h1>History</h1>
				<TracksList
					items={historyList}
					handleChooseTrack={searchForItem}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	historyList: state.history
});

export default connect(mapStateToProps, { searchForItem })(HistoryContainer);
