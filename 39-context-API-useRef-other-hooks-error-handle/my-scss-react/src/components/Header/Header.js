import React from 'react';

const Header = (props) => {
	const { count } = props;
	return (
		<>
			<h1>This is Home :{count}</h1>
		</>
	);
};

export default Header;
