import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Post.css';

const Post = (props) => {
	console.log(props.post);
	const { gender, email, nat } = props.post;
	const { title, first, last } = props.post.name;
	const { large } = props.post.picture;
	const { age, date } = props.post.dob;

	const history = useHistory();

	const showComments = (id) => {
		const url = `postDetails/${id}`;
		history.push(url);
	};

	return (
		<Col lg={4} md={6} xs={12}>
			<Card style={{ width: '15rem' }}>
				<Card.Img variant="top" src={large} />
				<Card.Body>
					<Card.Title>
						{title} {first} {last}
					</Card.Title>
					<Card.Text>Email: {email}</Card.Text>
					<Card.Text>Gender: {gender}</Card.Text>
					<Card.Text>
						Age: {age} <br /> Date of Birth: {date.slice(0, 10)}
					</Card.Text>
					<Button onClick={() => showComments(nat)} variant="outline-primary">
						Go somewhere
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Post;
