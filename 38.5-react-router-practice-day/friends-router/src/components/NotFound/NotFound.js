import React from 'react';
import notFound from '../../resources/images/404.jpg';

const NotFound = () => {
	return (
		<div>
			<img src={notFound} alt="" style={{ width: '100%' }} />
		</div>
	);
};

export default NotFound;
