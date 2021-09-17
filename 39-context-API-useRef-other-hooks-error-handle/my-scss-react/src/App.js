import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h2>Hello React Count : {count}</h2>
			<Header count={count} setCount={setCount}></Header>
			<Home count={count} setCount={setCount}></Home>
			<Shipment count={count} setCount={setCount}></Shipment>
		</>
	);
}

export default App;
