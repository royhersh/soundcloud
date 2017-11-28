import React from 'react';


/* CSS */
import '../style/app.scss';
import '../style/font-awesome/css/font-awesome.min.css';

import SearchContainer from './SearchContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		
		// find all sounds of buskers licensed under 'creative commons share alike'

	

		return (
			<div className="appContainer">

				<SearchContainer
					
				/>

				<div className="image container"></div>
				<div className="history container"></div>
			</div>
		);

	}
}



export default App;

