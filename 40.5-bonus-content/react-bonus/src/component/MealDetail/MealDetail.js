import React, { useEffect, useState } from 'react';

const MealDetail = () => {
	const [drinks, setDrinks] = useState({});

	useEffect(() => {
		try {
			async function fetchData() {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setDrinks(data.drinks[0]);
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div>
			<h2>Meal Details</h2>
			{/* <h4>Drink Name: {drinks?.drinks?.[0].strDrink}</h4> */}
			<h2>Drinks: {drinks.strDrink}</h2>
		</div>
	);
};

export default MealDetail;
