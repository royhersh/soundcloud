import React from 'react';
import { connect } from 'react-redux';

import TracksList from '../components/TracksList';

class HistoryContainer extends React.Component {

	render() {
		const { historyList } = this.props;
	
		return (
			<div className="history container">
				<TracksList
					items={historyList}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	historyList: state.history
});

export default connect(mapStateToProps, null)(HistoryContainer);
