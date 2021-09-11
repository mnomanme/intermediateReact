import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
	console.log(props);
	const { title, description, urlToImage, author } = props.article;

	return (
		<Card className="bg-info m-2">
			<Card.Img variant="top" src={urlToImage} style={{ height: '400px' }} />
			<Card.Header as="h3">{title}</Card.Header>
			<Card.Body>
				<Card.Title>Author: {author}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button variant="warning">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default News;
