import React from 'react';
import notFound from '../../resources/images/404.jpg';

const NotFound = () => {
	return (
		<>
			<img src={notFound} alt="NOT FOUND" style={{ width: '100%' }} />
		</>
	);
};

export default NotFound;
