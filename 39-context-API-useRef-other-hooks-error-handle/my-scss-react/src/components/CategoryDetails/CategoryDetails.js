import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetails = (props) => {
	const { name, category } = props.product;
	// const category = useContext(categoryContext);

	return (
		<>
			<h4>This is Category Details Count: {category}</h4>
			<p>Product name is: {name}</p>
		</>
	);
};

export default CategoryDetails;
