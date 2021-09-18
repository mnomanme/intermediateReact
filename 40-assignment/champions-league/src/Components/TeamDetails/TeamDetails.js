import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const TeamDetails = (props) => {
	console.log(props.team);
	const { strCountry, strTeam, strSport, strTeamBadge } = props.team;
	return (
		<Col lg={4} md={6} xs={12} className="teamColStyle">
			<Card className="cardStyle">
				<img className="logoStyle" variant="top" alt="team-badge" src={strTeamBadge} />
				<Card.Body>
					<h5>{strTeam}</h5>
					<h6>Sports Type: {strSport} </h6>
					<h6>Country: {strCountry} </h6>
					<Button variant="primary">Explore </Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default TeamDetails;
