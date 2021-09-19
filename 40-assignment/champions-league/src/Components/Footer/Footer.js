import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<p className="footer">
				&copy; Mohammad Noman || All rights reserved <small> {new Date().getFullYear()} </small>
			</p>
		</>
	);
};

export default Footer;
