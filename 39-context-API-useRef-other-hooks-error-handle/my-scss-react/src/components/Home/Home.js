import React from 'react';

const Home = (props) => {
	console.log(props);
	const { count, setCount } = props;
	return (
		<>
			<h1>This is Home : {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increament</button>
		</>
	);
};

export default Home;
