import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		const url = `https://randomuser.me/api/?results=20`;

		try {
			const fetchData = async () => {
				const res = await fetch(url);
				const data = await res.json();
				setPost(data.results);
				console.log(data.results);
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<h2>This is Home</h2>
			{post.map((user) => {
				const { cell } = user;
				return <Post key={cell} post={user}></Post>;
			})}
		</>
	);
};

export default Home;
