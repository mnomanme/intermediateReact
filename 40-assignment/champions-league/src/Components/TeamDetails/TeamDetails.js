import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faLandmark, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import malePhoto from '../../resources/images/male.png';
import femalePhoto from '../../resources/images/female.png';
import TeamDescription from '../TeamDescription/TeamDescription';
import FooterLogo from '../FooterLogo/FooterLogo';
import './TeamDetails.css';
import Footer from '../Footer/Footer';

const TeamDetails = () => {
	const { strTeam } = useParams();

	const [team, setTeam] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${strTeam}`;
			const res = await fetch(url);
			const data = await res.json();
			// console.log(data.teams[0]);
			setTeam(data.teams[0]);
		};
		fetchData();
	}, [strTeam]);

	const { strTeamBanner, intFormedYear, strCountry, strGender, strTeamBadge } = team;

	const headerStyle = {
		opacity: '0.8',
		backgroundImage: `url(${strTeamBanner})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 100%',
	};

	return (
		<>
			<section className="teamDetailHeader" style={headerStyle}>
				<img className="teamDetailHeaderLogo" src={strTeamBadge} alt="" />
			</section>
			<section className="team-detail-div">
				<Row className="team-detail-row">
					<Col className="team-detail" sm={6}>
						<h1>
							<strong> {team.strTeam} </strong>
						</h1>
						<p>
							<FontAwesomeIcon icon={faLandmark} /> Founded: {intFormedYear}
						</p>
						<p>
							<FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
						</p>
						<p>
							<FontAwesomeIcon icon={faFutbol} /> Sport Type: {team.strSport}
						</p>
						{team.strGender === 'Male' ? (
							<p>
								<FontAwesomeIcon icon={faMars} /> Gender: {strGender}
							</p>
						) : (
							<p>
								<FontAwesomeIcon icon={faVenus} /> Gender: {strGender}
							</p>
						)}
					</Col>
					<Col className="team-image-col" sm={6}>
						{strGender === 'Male' ? <img src={malePhoto} alt="Male-Team" /> : <img src={femalePhoto} alt="Female-Team" />}
					</Col>
				</Row>
				<TeamDescription team={team} />
				<FooterLogo icon={team} />
				<Footer />
			</section>
		</>
	);
};

export default TeamDetails;
