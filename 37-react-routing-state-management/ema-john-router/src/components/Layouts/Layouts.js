import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Layouts = () => {
	return (
		<>
			<Header />
			<Shop />
		</>
	);
};

export default Layouts;
