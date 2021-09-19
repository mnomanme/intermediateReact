import React from 'react';
import './TeamDescription.css';

const TeamDescription = (props) => {
	console.log(props.team);
	const { strDescriptionEN, strStadiumDescription } = props.team;

	return (
		<div className="description ">
			<p>
				<strong>Team Description English: </strong> {strDescriptionEN}{' '}
			</p>
			<p>
				<strong>Stadium Description: </strong> {strStadiumDescription}{' '}
			</p>
		</div>
	);
};

export default TeamDescription;
