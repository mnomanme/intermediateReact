import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
	const { id } = useParams();
	const [post, setPost] = useState([]);

	useEffect(() => {
		const url = `https://randomuser.me/api/?results/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPost(data.results[0]));
	}, [id]);

	return (
		<>
			<h2>This is Post Details : {id}</h2>
			<p>User Details: {post.phone}</p>
		</>
	);
};

export default PostDetail;
