import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../../resources/fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../resources/utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
	const [reviewCart, setReviewCart] = useState([]);

	const handleRemoveProduct = (productKey) => {
		console.log('review removed', productKey);
		const newCart = reviewCart.filter((pd) => {
			return pd.key !== productKey;
		});
		setReviewCart(newCart);
		removeFromDatabaseCart(productKey);
	};

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
		setReviewCart(productsCount);
		// console.log(productsCount);
	}, []);

	return (
		<Container className="d-flex">
			<section className="productContainer">
				<h2>Order Items: {reviewCart.length}</h2>
				{reviewCart.map((pd) => {
					const { key } = pd;
					return <ReviewItems key={key} reviewProduct={pd} handleRemoveProduct={handleRemoveProduct} />;
				})}
			</section>
			<section className="cartContainer">
				<Cart cart={reviewCart} />
			</section>
		</Container>
	);
};

export default Review;
