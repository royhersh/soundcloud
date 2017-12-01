import React from 'react';


/* CSS */
import '../style/app.scss';
import '../style/font-awesome/css/font-awesome.min.css';

import SearchContainer from './SearchContainer';
import HistoryContainer from './historyContainer';
import ImageContainer from './ImageContainer';

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

				<ImageContainer />
				<HistoryContainer
				/>
				
			</div>
		);

	}
}



export default App;

