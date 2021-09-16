import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FriendsData from './components/FriendsData/FriendsData';

function App() {
	return (
		<Router>
			<Switch>
				<Route>
					<FriendsData></FriendsData>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
