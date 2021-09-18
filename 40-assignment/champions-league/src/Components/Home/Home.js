import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import TeamDetails from '../TeamDetails/TeamDetails';

const Home = () => {
	return (
		<>
			<Header />
			<Team />
		</>
	);
};

const Team = () => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4490`;
				const res = await fetch(url);
				const data = await res.json();
				// console.log(data.teams);
				setTeam(data.teams);
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<Container>
				<Row>
					{team.map((team) => (
						<TeamDetails key={team.idTeam} team={team}></TeamDetails>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Home;
