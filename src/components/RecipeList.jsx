import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import NavigationBar from "./NavigationBar";

const RecipeList = () => {
	const [recipes, setRecipes] = useState([]);
	const { query } = useParams();
	const [page, setPage] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isExpanded, setIsExpanded] = useState(false);

	const appId = process.env.REACT_APP_EDAMAM_APP_ID;
	const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;

	const fetchRecipes = useRef(() => {});

	fetchRecipes.current = () => {
		axios
			.get(
				`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=${page}&to=${
					page + 10
				}`
			)
			.then((response) => {
				setRecipes((prevRecipes) => [...prevRecipes, ...response.data.hits]);
				setPage((prevPage) => prevPage + 10);
				console.log(response.data.hits);
			})
			.catch((error) => console.error("Error:", error));
	};

	useEffect(() => {
		setPage(0);
		setRecipes([]);
		fetchRecipes.current();
	}, [query]);

	const handleNext = () => {
		if (currentIndex < recipes.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			fetchRecipes.current();
		}
		setIsExpanded(false);
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
		setIsExpanded(false);
	};

	//TODO Make Loading... fancy
	// TODO Make message if no recipes

	const recipe = recipes[currentIndex];

	if (!recipe) return <p>Loading...</p>;

	return (
		<>
			<NavigationBar />
			<Container
				className='d-flex justify-content-center align-items-center'
				style={{ position: "relative" }}>
				<div style={{ position: "sticky", top: "10px", left: "0" }}>
					<Button
						style={{ width: "150px" }}
						className='btn btn-primary btn-lg'
						onClick={handlePrev}
						disabled={currentIndex === 0}>
						Previous
					</Button>
				</div>

				<RecipeCard
					recipe={recipe.recipe}
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
					isSavedPage={false}
				/>

				<div style={{ position: "sticky", top: "10px", right: "0" }}>
					<Button
						style={{ width: "150px" }}
						className='btn btn-primary btn-lg'
						onClick={handleNext}
						disabled={
							currentIndex === recipes.length - 1 && recipes.length % 10 !== 0
						}>
						{currentIndex === recipes.length - 1 ? "Load more" : "Next"}
					</Button>
				</div>
			</Container>
		</>
	);
};

export default RecipeList;
