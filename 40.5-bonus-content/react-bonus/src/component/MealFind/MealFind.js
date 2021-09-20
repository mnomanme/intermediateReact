import React, { useEffect, useState } from 'react';

const MealFind = () => {
	const [search, setSearch] = useState('');
	const [drink, setDrink] = useState([]);

	const handleChange = (event) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

	useEffect(() => {
		try {
			async function fetchData() {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setDrink(data.drinks);
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [search]);

	return (
		<div>
			<h2>Find Drinks</h2>

			<input onChange={handleChange} type="text" placeholder="search drink" />

			<h5>Drink Found: {drink?.length || 0}</h5>

			<h5>Search: {search}</h5>

			{drink?.map((drink) => (
				<h4 key={drink.idDrink}>{drink.strDrink}</h4>
			))}
		</div>
	);
};

export default MealFind;
