import React, { useState } from 'react';
import fakeData from '../../resources/fakeData';
import { Container } from 'react-bootstrap';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
	// console.log(fakeData);
	return (
		<div>
			<Container>
				<ShopData></ShopData>
			</Container>
		</div>
	);
};

// get shop data from fakedata
const ShopData = () => {
	const firstTen = fakeData.slice(50, 55);
	// console.log(firstTen);
	const [products, setProducts] = useState(firstTen);

	const [cart, setCart] = useState([]);

	const handleAddProduct = (pd) => {
		// console.log('add product', pd);
		const newCart = [...cart, pd];
		setCart(newCart);
	};

	return (
		<div className="shopContainer">
			<section className="productContainer">
				<h3>Total Product: {products.length}</h3>
				{products.map((pd) => {
					const { key } = pd;
					return <Product key={key} product={pd} handleAddProduct={handleAddProduct} />;
				})}
			</section>

			<section className="cartContainer">
				<Cart cart={cart} />
			</section>
		</div>
	);
};

export default Shop;
