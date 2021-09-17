import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const categoryContext = createContext();

function App() {
	const [category, setCategory] = useState(0);

	return (
		<>
			<categoryContext.Provider value={[category, setCategory]}>
				<h2>Hello React Count : {category}</h2>
				<Header></Header>
				<Home></Home>
				<Shipment></Shipment>
			</categoryContext.Provider>
		</>
	);
}

export default App;
