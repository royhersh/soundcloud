import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SC from 'soundcloud';

import reducers from './reducers';
import App from './containers/App'; // Main app 

// Initializr SC API
SC.initialize({
	client_id: 'ggX0UomnLs0VmW7qZnCzw'
});

// Creating store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument(SC)))
);

const Root = ({ store }) => (
	<Provider store={store}>
		<div className="container">
			<App />
		</div>
	</Provider>
);

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);