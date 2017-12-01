import React from 'react';
import { connect } from 'react-redux';

class TracksList extends React.Component  {
	render() {
		const { items, handleChooseTrack } = this.props;
		const renderItems = items.map((item) => (
			<li key={item.id} onClick={() => handleChooseTrack(item)}><a href="#">{item.title}</a></li>
		));
		return (
			<ul className="tracksList">
				{renderItems}
			</ul>
		);
	}
}

export default connect(null,null)(TracksList);
