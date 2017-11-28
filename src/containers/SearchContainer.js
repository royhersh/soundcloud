import React from 'react';
import TracksList from '../components/TracksList';

class SearchContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchBox: ''
		};
	}

	handleSearchChange = (e) => this.setState({ searchBox: e.target.value });

	render() {
		const { searchBox } = this.state;
		
		const InputBox = () => (
			<div className="inputBox">
				<input type="text" value={searchBox} onChange={this.handleSearchChange}/>
				<button>Search</button>
			</div>
		);
	
		const Footer = () => (
			<div className="footer">
				<button><i className="fa fa-long-arrow-left" aria-hidden="true"></i></button>
				<div className="gap"></div>
				<i className="fa fa-list fa-6" aria-hidden="true"></i>
				<i className="fa fa-th-large fa-2" aria-hidden="true"></i>
			</div>
		);
	
		return (
			<div className="search container">
			<div className="inputBox">
				<input type="text" value={searchBox} onChange={this.handleSearchChange}/>
				<button>Search</button>
			</div>
				<TracksList />
				<Footer />
			</div>
		);
	}
};

export default SearchContainer;