import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const AllTeams = (props) => {
	const { strTeam, strTeamBadge, strSport, strCountry } = props.team;

	return (
		<>
			<h4>This is All Teams</h4>
			<Col lg={4} md={6} xs={12} className="teamColStyle">
				<Card className="cardStyle">
					<img className="logoStyle" variant="top" alt="team-badge" src={strTeamBadge} />
					<Card.Body>
						<h5>{strTeam}</h5>
						<h6>Sports Type: {strSport}</h6>
						<h6>Country: {strCountry}</h6>
						<Button variant="primary">
							Explore <FontAwesomeIcon icon={faArrowAltCircleRight} />
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default AllTeams;
