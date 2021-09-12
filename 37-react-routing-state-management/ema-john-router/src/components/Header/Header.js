import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import logo from '../../resources/images/logo.png';

const Header = () => {
	return (
		<div>
			<Container className="header">
				<img src={logo} alt="" />
				<nav>
					<a href="/shop">Shop</a>
					<a href="/order">Order</a>
					<a href="/manage">Manage Inventory</a>
				</nav>
			</Container>
		</div>
	);
};

export default Header;
