import React from 'react';

const TracksList = (props) => {
	const { items, handleChooseTrack } = props;
	const renderItems = items.map((item) => (
		<li key={item.id} onClick={() => handleChooseTrack(item)}><a href="#">{item.title}</a></li>
	));
	return (
		<ul className="tracksList">
			{renderItems}
		</ul>
	);
};

export default TracksList;
