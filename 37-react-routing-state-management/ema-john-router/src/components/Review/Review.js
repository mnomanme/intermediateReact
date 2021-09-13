import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../../resources/fakeData';
import { getDatabaseCart } from '../../resources/utilities/databaseManager';

const Review = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		// cart
		const storeCart = getDatabaseCart();
		const productKeys = Object.keys(storeCart);
		// const productsCount = productKeys.map((pdKey) => storeCart[pdKey]);
		const productsCount = productKeys.map((pdKey) => {
			const products = fakeData.find((data) => data.key === pdKey);
			products.quantity = storeCart[pdKey];

			return products;
		});
		setCart(productsCount);
		console.log(productsCount);
	}, []);

	return (
		<Container>
			<h2>Order Items: {cart.length}</h2>
		</Container>
	);
};

export default Review;
