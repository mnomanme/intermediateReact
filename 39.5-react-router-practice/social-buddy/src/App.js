import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import { Button, Container } from 'react-bootstrap';
import PostDetail from './components/PostDetail/PostDetail';
function App() {
	return (
		<Container>
			<Router>
				<section className="text-center">
					<Link to="/">
						<Button variant="outline-primary" className="m-2">
							Home
						</Button>
					</Link>
					<Link to="/about">
						<Button variant="outline-secondary">About</Button>
					</Link>
				</section>

				<hr />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/postDetails/:id">
						<PostDetail />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
