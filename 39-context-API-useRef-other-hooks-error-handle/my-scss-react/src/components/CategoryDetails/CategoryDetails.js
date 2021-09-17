import React from 'react';

const CategoryDetails = (props) => {
	const { count } = props;

	return (
		<>
			<h4>This is Category Details Count: {count}</h4>
		</>
	);
};

export default CategoryDetails;
