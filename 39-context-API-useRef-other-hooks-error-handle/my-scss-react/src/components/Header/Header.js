import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
	const [category, setCategory] = useContext(categoryContext);
	return (
		<>
			<h1>This is Header :{category}</h1>
			<button onClick={() => setCategory(category + 1)}>Increament</button>
			<button onClick={() => setCategory('mobile')}>Mobile</button>
			<button onClick={() => setCategory('laptop')}>Laptop</button>
			<button onClick={() => setCategory('computer')}>Computer</button>
		</>
	);
};

export default Header;
