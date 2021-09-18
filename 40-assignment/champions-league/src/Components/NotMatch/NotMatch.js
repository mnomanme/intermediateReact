import React from 'react';
import notFound from '../../resources/images/404.jpg';

const NotMatch = () => {
	return (
		<>
			<img src={notFound} alt="" style={{ width: '100%' }} />
		</>
	);
};

export default NotMatch;
