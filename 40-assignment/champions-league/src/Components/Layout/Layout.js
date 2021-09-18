import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotMatch from '../NotMatch/NotMatch';
import TeamDetails from '../TeamDetails/TeamDetails';

const Layout = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>

					<Route exact path="/tDetails/:strTeam">
						<TeamDetails />
					</Route>
					<Route path="*">
						<NotMatch />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default Layout;
