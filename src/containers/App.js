import React from 'react';

/* CSS */
import '../style/app.scss';
import '../style/font-awesome/css/font-awesome.min.css';


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	
		return (
			<h1>Hello from React</h1>
		);
      
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default App;

