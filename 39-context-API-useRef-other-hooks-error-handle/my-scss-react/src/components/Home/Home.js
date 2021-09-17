import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = (props) => {
	const category = useContext(categoryContext);
	console.log(props);
	// const { count } = props;
	return (
		<section style={{ border: '2px solid purple' }}>
			<h1>This is Home : {category}</h1>
			<Categories count={category}></Categories>
		</section>
	);
};

export default Home;
