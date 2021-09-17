import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetails = (props) => {
	const { count } = props;

	const category = useContext(categoryContext);

	return (
		<>
			<h4>This is Category Details Count: {count}</h4>
			<p>Product name is: {category}</p>
		</>
	);
};

export default CategoryDetails;
