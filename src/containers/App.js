import React from 'react';


/* CSS */
import '../style/app.scss';
import '../style/font-awesome/css/font-awesome.min.css';

import SearchContainer from './SearchContainer';
import HistoryContainer from './historyContainer';

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
				<HistoryContainer
				/>
				
			</div>
		);

	}
}



export default App;

