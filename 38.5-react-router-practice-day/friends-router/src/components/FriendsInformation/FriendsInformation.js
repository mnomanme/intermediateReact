import React from 'react';
import { useParams } from 'react-router';

const FriendsInformation = () => {
	const { id } = useParams();

	return (
		<>
			<h2>This is Friends Information</h2>
		</>
	);
};

export default FriendsInformation;
