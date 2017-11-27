import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import reducers from './reducers';
import App from './containers/App'; // Main app route

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux dev tools
);

const Root = ({store}) => (
	<Provider store={store}>
		<div className="container">
			<Router>
				<div>
					<Route exact path="/" component={App} />
				</div>
			</Router>
		</div>
	</Provider>
);

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);