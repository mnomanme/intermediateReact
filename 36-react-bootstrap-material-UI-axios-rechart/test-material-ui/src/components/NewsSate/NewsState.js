import React, { useEffect, useState } from 'react';
import News from '../News/News';
import axios from 'axios';

const NewsState = () => {
	const [article, setArticle] = useState([]);

	// useEffect(() => {
	// 	const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0c56bba895e47d29a102669ef440db4`;

	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await fetch(url);
	// 			const data = await res.json();
	// 			setArticle(data.articles);
	// 			console.log(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	// axios
	useEffect(() => {
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0c56bba895e47d29a102669ef440db4`;

		const fetchData = async () => {
			try {
				const data = await axios(url);
				setArticle(data.data.articles);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();

		// axios(url).then((data) => console.log(data));
	}, []);

	return (
		<div>
			<h2>Headline: {article.length}</h2>
			{article?.map((news, idx) => {
				return <News key={idx} data={news} />;
			})}
		</div>
	);
};

export default NewsState;
