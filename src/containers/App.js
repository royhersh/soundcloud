import React from 'react';
import SC from 'soundcloud';
/* CSS */
import '../style/app.scss';
import '../style/font-awesome/css/font-awesome.min.css';

import SearchContainer from './SearchContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

		SC.initialize({
			client_id: 'ggX0UomnLs0VmW7qZnCzw'
		});
	}

	render() {

		// find all sounds of buskers licensed under 'creative commons share alike'
		SC.get('/tracks', {
			q: 'pixies',
			limit: 6,
			linked_partitioning: 2
		}).then(function (tracks) {
			console.log(tracks);
		});
	

		return (
			<div className="appContainer">

				<SearchContainer />

				<div className="image container"></div>
				<div className="history container"></div>
			</div>
		);

	}
}



export default App;

