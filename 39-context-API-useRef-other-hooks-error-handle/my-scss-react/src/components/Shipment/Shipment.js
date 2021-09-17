import React from 'react';

const Shipment = (props) => {
	const { count } = props;
	return (
		<>
			<h1>This is Shipment: {count} </h1>
		</>
	);
};

export default Shipment;
