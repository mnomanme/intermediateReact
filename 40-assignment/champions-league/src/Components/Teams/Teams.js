import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllTeams from '../AllTeams/AllTeams';

const Teams = () => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4490`;
			const res = await fetch(url);
			const data = await res.json();
			console.log(data.teams);
			setTeams(data.teams);
		};
		fetchData();
	}, []);

	return (
		<>
			<h4>This is Team</h4>
			<Container>
				<Row>
					{teams.map((team) => (
						<AllTeams key={team.idTeam} team={team}></AllTeams>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Teams;
