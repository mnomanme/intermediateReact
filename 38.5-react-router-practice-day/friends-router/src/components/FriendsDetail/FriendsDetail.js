import React from 'react';
import { Container } from 'react-bootstrap';

const FriendsDetail = (props) => {
	const { name, email } = props.friend;
	console.log(props.friend);
	return (
		<Container className="text-center bg-info">
			<h2>Name :{name}</h2>
			<p>Email: {email}</p>
		</Container>
	);
};

export default FriendsDetail;
