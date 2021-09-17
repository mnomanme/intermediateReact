import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Post.css';

const Post = (props) => {
	console.log(props.post);
	const { gender, email } = props.post;
	const { title, first, last } = props.post.name;
	const { medium } = props.post.picture;
	const { age, date } = props.post.dob;

	return (
		<Card bg="outline-warning" style={{ width: '18rem' }}>
			<Card.Img variant="top" src={medium} />
			<Card.Body>
				<Card.Title>
					{title} {first} {last}
				</Card.Title>
				<Card.Text>Email: {email}</Card.Text>
				<Card.Text>Gender: {gender}</Card.Text>
				<Card.Text>
					Age: {age} <br /> Date of Birth: {date.slice(0, 10)}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default Post;
