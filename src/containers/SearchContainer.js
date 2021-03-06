import React from 'react';
import { connect } from 'react-redux';
import { updateSearchBox, searchForItem, chooseTrack, fetchNextResult } from '../actions/index';
import TracksList from '../components/TracksList';

class SearchContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showTiles: false
		};

	}

	handleSearchChange = (e) => this.props.updateSearchBox(e.target.value);

	render() {
		const { searchBoxValue, searchResult, searchForItem, chooseTrack, fetchNextResult } = this.props;

		const footer = <div className="footer">
			<button onClick={() => fetchNextResult()}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
			<div className="gap"></div>
			<i onClick={() => this.setState({ showTiles: false })} className="fa fa-list fa-6" aria-hidden="true"></i>
			<i onClick={() => this.setState({ showTiles: true })} className="fa fa-th-large fa-2" aria-hidden="true"></i>
		</div>;
		
		return (
			<div className="search container">

				{/* Search Input and Button */}
				<div className="inputBox">
					<input type="text" value={searchBoxValue} onChange={this.handleSearchChange} />
					<button onClick={() => searchForItem(searchBoxValue)}>Search</button>
				</div>

				<TracksList
					items={searchResult}
					handleChooseTrack={chooseTrack}
					flyEffect={true}
					showTiles={this.state.showTiles}
				/>

				{footer}

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	searchResult: state.searchResult,
	searchBoxValue: state.ui.searchBox
});

export default connect(mapStateToProps, { updateSearchBox, searchForItem, chooseTrack, fetchNextResult })(SearchContainer);