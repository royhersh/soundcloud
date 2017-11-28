import React from 'react';
import SC from 'soundcloud';
/* CSS */
import '../style/app.scss';
import '../style/font-awesome/css/font-awesome.min.css';


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

				<div className="search container">
					<div className="inputBox">
						<input type="text" />
						<button>Search</button>
					</div>

					<ul className="tracksList">
						<li><a href="#">Zurich</a></li>
						<li><a href="#">Geneva</a></li>
						<li><a href="#">Winterthur</a></li>
						<li><a href="#">Lausanne</a></li>
						<li><a href="#">Lucerne</a></li>
						<li><a href="#">Alabamba</a></li>
					</ul>
					<div className="footer">
						<button><i className="fa fa-long-arrow-left" aria-hidden="true"></i></button>
						<div className="gap"></div>
						<i className="fa fa-list fa-6" aria-hidden="true"></i>
						<i className="fa fa-th-large fa-2" aria-hidden="true"></i>
					</div>
				</div>

				<div className="image container"></div>
				<div className="history container"></div>
			</div>
		);

	}
}



export default App;

