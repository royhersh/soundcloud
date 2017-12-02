import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SC from 'soundcloud';


SC.initialize({
	client_id: 'ggX0UomnLs0VmW7qZnCzw'
});

import reducers from './reducers';
import App from './containers/App'; // Main app route

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument(SC)))
);
store.subscribe(function () {
});

const Root = ({ store }) => (
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