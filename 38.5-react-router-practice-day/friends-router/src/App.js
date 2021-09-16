import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FriendsData from './components/FriendsData/FriendsData';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<FriendsData></FriendsData>
				</Route>
				<Route path="/home">
					<FriendsData></FriendsData>
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
