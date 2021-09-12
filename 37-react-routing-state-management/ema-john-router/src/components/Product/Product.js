import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
	// console.log(props);
	const { name, seller, stock, img, price } = props.product;
	const { handleAddProduct, product } = props;

	return (
		<section className="product">
			<div className="itemsPhoto">
				<img src={img} alt="" />
			</div>

			<div className="productItem">
				<h6 className="productName">{name}</h6>
				<p>
					<small>by: {seller}</small>
				</p>
				<h6>${price}</h6>
				<p>
					<small>Only {stock} left in stock - Order Soon</small>
				</p>
				<Button onClick={() => handleAddProduct(product)} variant="outline-info" size="md-lg">
					<FontAwesomeIcon icon={faShoppingCart} /> add to cart
				</Button>
			</div>
		</section>
	);
};

export default Product;
