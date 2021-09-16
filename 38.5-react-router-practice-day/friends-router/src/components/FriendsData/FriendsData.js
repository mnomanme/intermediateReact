import React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FriendsDetail from '../FriendsDetail/FriendsDetail';

const FriendsData = () => {
	const [friend, setFriend] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://jsonplaceholder.typicode.com/users`;
			const res = await fetch(url);
			const data = await res.json();
			// console.log(data);
			setFriend(data);
		};
		fetchData();
	}, []);

	return (
		<>
			<h2 className="text-center fw-bold text-danger">Friends: {friend.length}</h2>
			{friend.map((friend) => {
				const { id } = friend;
				return (
					<Fragment key={id}>
						<FriendsDetail friend={friend}></FriendsDetail>
					</Fragment>
				);
			})}
		</>
	);
};

export default FriendsData;
