import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
const Header = () => {
	return (
		<CardColumns>
			<Card>
				<Card.Body>
					<Card.Title>Home</Card.Title>
					<Card.Title>Card title that wraps to a new line</Card.Title>
					<Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
				</Card.Body>
			</Card>
		</CardColumns>
	);
};

export default Header;
