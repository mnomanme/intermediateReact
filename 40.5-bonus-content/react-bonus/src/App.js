import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react';
import MealDetail from './component/MealDetail/MealDetail';

function App() {
	const [likeColor, setLikeColor] = useState('');
	const [users, setUsers] = useState([]);
	const [singleUser, setSingleUser] = useState({});
	const [randomUser, setRandomUser] = useState([]);

	const handleLike = () => {
		const like = likeColor ? '' : 'primary';
		setLikeColor(like);
	};

	useEffect(() => {
		try {
			async function fetchData() {
				const url = `https://jsonplaceholder.typicode.com/users`;
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setUsers(data);
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
		// single user
		const fetchData = async () => {
			const url = `https://jsonplaceholder.typicode.com/users/1`;
			const res = await fetch(url);
			const data = await res.json();
			setSingleUser(data);
		};
		fetchData();
		// random user
		fetch(`https://randomuser.me/api/`)
			.then((res) => res.json())
			.then((data) => setRandomUser(data.results[0]));
		//
	}, []);

	return (
		<div className="App">
			<h2>Hello React </h2>

			<MealDetail />

			<ThumbUpIcon onClick={handleLike} fontSize="large" color={likeColor}></ThumbUpIcon>

			{users.map((users) => (
				<li key={users.id}>{users.name}</li>
			))}

			<h3>Single Name: {singleUser.name}</h3>
			<h3>Random: {randomUser.name?.title} </h3>
		</div>
	);
}

export default App;
