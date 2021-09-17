import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = (props) => {
	const { count } = props;

	return (
		<>
			<h2>This is Categories</h2>
			<CategoryDetails count={count}></CategoryDetails>
		</>
	);
};

export default Categories;
