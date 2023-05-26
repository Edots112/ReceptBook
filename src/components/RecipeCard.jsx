import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import NutritionInfo from "./NutritionInfo";
import ExpandableList from "./ExpandableList";

const RecipeCard = ({ recipe, isSavedPage, setSavedRecipes, isGrid }) => {
	const [isSaved, setIsSaved] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		let savedRecipes = localStorage.getItem("savedRecipes");
		if (savedRecipes) {
			savedRecipes = JSON.parse(savedRecipes);
			const alreadySaved = savedRecipes.some(
				(savedRecipe) => savedRecipe.uri === recipe.uri
			);
			setIsSaved(alreadySaved);
		}
	}, [recipe]);

	const handleStarClick = (recipe) => {
		let savedRecipes = localStorage.getItem("savedRecipes");

		if (!savedRecipes) {
			savedRecipes = [];
		} else {
			savedRecipes = JSON.parse(savedRecipes);
		}

		const alreadySaved = savedRecipes.some(
			(savedRecipe) => savedRecipe.uri === recipe.uri
		);

		if (!alreadySaved) {
			savedRecipes.push(recipe);
			localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
			setIsSaved(true);
		}
	};

	const removeFromSavedRecipes = (recipeUri) => {
		let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

		savedRecipes = savedRecipes.filter(
			(savedRecipe) => savedRecipe.uri !== recipeUri
		);

		localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
		setSavedRecipes(savedRecipes);
	};
	return (
		<>
			<Card
				className='mx-2 shadow p-3 mb-5 bg-white rounded mx-5 my-5'
				style={
					isGrid
						? { backgroundColor: "#f8f9fa", gap: "1rem" }
						: {
								backgroundColor: "#f8f9fa",
								width: "40rem",
								gap: "1rem",
								minHeight: "47rem",
						  }
				}>
				<Card.Img
					variant='top'
					src={recipe.image}
					style={{ maxHeight: "250px", objectFit: "scale-down" }}
				/>
				{isSavedPage ? (
					<Button
						className='position-absolute '
						onClick={() => removeFromSavedRecipes(recipe.uri)}>
						Remove recipe
					</Button>
				) : isSaved ? (
					<Button
						className='position-absolute'
						disabled>
						Saved
					</Button>
				) : (
					<Button
						className='position-absolute'
						onClick={() => handleStarClick(recipe)}>
						Save recipe
					</Button>
				)}
				<Card.Body className='d-flex flex-column'>
					<Card.Title className='border-bottom text-primary'>
						{recipe.label}
					</Card.Title>
					<Card.Subtitle className='mb-2 text-muted d-flex justify-content-between'>
						<div>Servings: {recipe.yield}</div>
						<div>Time: {recipe.totalTime} minutes</div>
						<div>{recipe.dishType}</div>
					</Card.Subtitle>
					<Card.Text className=''>
						<ExpandableList
							items={recipe.ingredientLines}
							isExpanded={isExpanded}
							setIsExpanded={setIsExpanded}
						/>
						<div className='mt-4 bg-light p-3 rounded '>
							<Card.Title>Nutrition Facts</Card.Title>
							<NutritionInfo recipe={recipe} />
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default RecipeCard;
