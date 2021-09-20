import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

function App() {
	const [likeColor, setLikeColor] = useState('');

	const handleLike = () => {
		const like = likeColor ? '' : 'primary';
		setLikeColor(like);
	};

	return (
		<div className="App">
			<h2>Hello React</h2>
			<ThumbUpIcon onClick={handleLike} fontSize="large" color={likeColor}></ThumbUpIcon>
		</div>
	);
}

export default App;
