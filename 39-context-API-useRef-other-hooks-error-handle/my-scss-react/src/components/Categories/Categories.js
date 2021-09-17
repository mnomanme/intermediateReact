import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const prodcuts = [
	{ id: 101, name: 'lenevo', category: 'laptop' },
	{ id: 201, name: 'Asus', category: 'laptop' },
	{ id: 301, name: 'Dell', category: 'laptop' },
	{ id: 401, name: 'Nokia Plus', category: 'mobile' },
	{ id: 501, name: 'Samsung Note+', category: 'mobile' },
	{ id: 601, name: 'iPhone12', category: 'mobile' },
	{ id: 701, name: 'Apple', category: 'computer' },
	{ id: 801, name: 'Msi', category: 'computer' },
	{ id: 901, name: 'Hp', category: 'computer' },
	{ id: 1001, name: 'Walton', category: 'computer' },
];

const Categories = (props) => {
	// const { count } = props;
	const [category] = useContext(categoryContext);

	const [product, setProduct] = useState([]);

	useEffect(() => {
		// console.log(category);
		const matchedProducts = prodcuts.filter((pd) => pd.category === category);
		setProduct(matchedProducts);
	}, [category]);

	return (
		<>
			<h2>This is Categories: {category}</h2>
			{product.map((pd) => (
				<CategoryDetails key={prodcuts.id} product={pd}></CategoryDetails>
			))}
		</>
	);
};

export default Categories;
