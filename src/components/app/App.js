import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import SignUp from '../user-forms/SignUp';
import SignIn from '../user-forms/SignIn';

import './App.css';

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					<Switch>
						<Route path='/Meet/SignUp' component={SignUp} />
						<Route path='/Meet' component={SignIn} />
					</Switch>
				</div>
			</ScrollToTop>
		</Router>
	);
}

export default App;