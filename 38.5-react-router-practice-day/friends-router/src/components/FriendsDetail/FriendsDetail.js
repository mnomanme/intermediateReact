import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FriendsDetail = (props) => {
	const { name, email, id } = props.friend;
	console.log(props.friend);

	return (
		<>
			<section className="text-center bg-info m-5 p-5 rounded border border-warning">
				<h2>Name :{name}</h2>
				<p>Email: {email}</p>
				<small>Id: {id}</small>
				<br />
				<Link to={`/friends/${id}`}>
					<Button variant="success">Show Details</Button>
				</Link>
			</section>
		</>
	);
};

export default FriendsDetail;
