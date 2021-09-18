import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import NotMatch from '../NotMatch/NotMatch';

const Layout = () => {
	return (
		<Router>
			<Link to="/">Home</Link>

			<Link to="/about">About</Link>

			<Link to="/users">Users</Link>

			<Switch>
				<Route exact="/home">
					<Home />
				</Route>
				<Route path="/">
					<Home />
				</Route>
				<Route path="*">
					<NotMatch />
				</Route>
			</Switch>
		</Router>
	);
};

export default Layout;
