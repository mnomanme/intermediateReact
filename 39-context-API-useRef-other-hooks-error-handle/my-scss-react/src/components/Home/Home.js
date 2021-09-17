import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
	console.log(props);
	const { count } = props;
	return (
		<section style={{ border: '2px solid purple' }}>
			<h1>This is Home : {count}</h1>
			<Categories count={count}></Categories>
		</section>
	);
};

export default Home;
