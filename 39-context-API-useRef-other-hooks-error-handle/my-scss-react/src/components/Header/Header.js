import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = (pops) => {
	const [category, setCategory] = useContext(categoryContext);
	return (
		<>
			<h1>This is Header :{category}</h1>
			<button onClick={() => setCategory(category + 1)}>Increament</button>
		</>
	);
};

export default Header;
