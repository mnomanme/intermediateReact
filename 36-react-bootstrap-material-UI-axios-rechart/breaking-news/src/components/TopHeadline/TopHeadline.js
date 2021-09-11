import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0c56bba895e47d29a102669ef440db4`;
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setArticles(data.articles);
				// console.log(data.articles);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<h2>Top Headline: {articles.length}</h2>

			{articles.map((article, index) => {
				// console.log(article.title);
				return <News key={index} article={article}></News>;
			})}
		</div>
	);
};

export default TopHeadline;
