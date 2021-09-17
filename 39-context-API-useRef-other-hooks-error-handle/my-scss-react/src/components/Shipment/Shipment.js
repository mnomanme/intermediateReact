import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
	const [category, setCategory] = useContext(categoryContext);
	return (
		<>
			<h1>This is Shipment: {category} </h1>
			<button onClick={() => setCategory(category + 2)}>Increament for Shipping</button>
		</>
	);
};

export default Shipment;
