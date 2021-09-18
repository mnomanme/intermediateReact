import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './AllTeams.css';
import { useHistory } from 'react-router';

const AllTeams = (props) => {
	const { strTeam, strTeamBadge, strSport, strCountry } = props.team;

	const teamHistory = useHistory();

	const showTeamDetail = (strTeam) => {
		const url = `/tDetails/${strTeam}`;
		teamHistory.push(url);
	};

	return (
		<Col lg={4} md={6} xs={12} className="Team">
			<Card className="Card">
				<img className="Logo" variant="top" alt="team-badge" src={strTeamBadge} />
				<Card.Body>
					<h5>{strTeam}</h5>
					<h6>Sports Type: {strSport} </h6>
					<h6>Country: {strCountry} </h6>
					<Button onClick={() => showTeamDetail(strTeam)} variant="outline-success">
						Explore <FontAwesomeIcon icon={faArrowAltCircleRight} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default AllTeams;
