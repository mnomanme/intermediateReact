import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
	const category = useContext(categoryContext);
	return (
		<>
			<h1>This is Shipment: {category} </h1>
		</>
	);
};

export default Shipment;
