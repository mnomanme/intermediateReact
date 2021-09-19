import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import './FooterLogo.css';

const FooterLogo = (props) => {
	const { strFacebook, strYoutube, strTwitter, strInstagram } = props.icon;
	return (
		<section className="logoDiv">
			<Link to="/">
				<Button variant="outline-info">Return Home</Button>
			</Link>

			<br />
			<a href={'https://' + strFacebook}>
				<FontAwesomeIcon className="fbLogo" size="3x" icon={faFacebook} />
			</a>
			<a href={'https://' + strYoutube}>
				<FontAwesomeIcon className="ytLogo" size="3x" icon={faYoutubeSquare} />
			</a>
			<a href={'https://' + strTwitter}>
				<FontAwesomeIcon className="ttLogo" size="3x" icon={faTwitter} />
			</a>
			<a href={'https://' + strInstagram}>
				<FontAwesomeIcon className="instaLogo" size="3x" icon={faInstagram} />
			</a>
		</section>
	);
};

export default FooterLogo;
