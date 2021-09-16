import React from 'react';
import { Container } from 'react-bootstrap';

const FriendsDetail = (props) => {
	const { name, email } = props.friend;
	console.log(props.friend);

	return (
		<section className="text-center bg-info m-5 p-5 rounded border border-warning">
			<h2>Name :{name}</h2>
			<p>Email: {email}</p>
		</section>
	);
};

export default FriendsDetail;
