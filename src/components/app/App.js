import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import './App.css';

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					
				</div>
			</ScrollToTop>
		</Router>
	);
}

export default App;