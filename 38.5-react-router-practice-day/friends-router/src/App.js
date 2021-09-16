import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FriendsData from './components/FriendsData/FriendsData';
import FriendsInformation from './components/FriendsInformation/FriendsInformation';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<Container>
			<Router>
				<Switch>
					<Route exact path="/">
						<FriendsData />
					</Route>

					<Route path="/home">
						<FriendsData />
					</Route>

					<Route path="/friends/:id">
						<FriendsInformation />
					</Route>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
