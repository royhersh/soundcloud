import React from 'react';

const TracksList = (props) => {
	const { items } = props;
	const renderItems = items.map((item) => (
		<li key={item.id}><a href="#">{item.title}</a></li>
	));
	return (
		<ul className="tracksList">
			{renderItems}
		</ul>
	);
};

export default TracksList;
