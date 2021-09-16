import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendsInformation = () => {
	const { id } = useParams();

	const [friendInformation, setFriendInformation] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://jsonplaceholder.typicode.com/users/${id}`;
			const res = await fetch(url);
			const data = await res.json();
			setFriendInformation(data);
			// console.log(data);
		};
		fetchData();
	}, [id]);

	const { username, website } = friendInformation;
	return (
		<>
			<section className="text-center text-warning fw-light bg-secondary mt-5 p-5 rounded border border-warning">
				<h4>Friends Information: {id}</h4>
				<h6>username: {username}</h6>
				<small>website: {website}</small>
			</section>
		</>
	);
};

export default FriendsInformation;
