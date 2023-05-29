import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import NavigationBar from "./NavigationBar";

const MyPage = ({ hideMyPageButton }) => {
	const [savedRecipes, setSavedRecipes] = useState([]);

	useEffect(() => {
		const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
		setSavedRecipes(savedRecipes);
	}, []);

	//TODO Make message if no saved recipes
	return (
		<>
			<NavigationBar hideMyPageButton={true} />
			<Container>
				<Row>
					{savedRecipes.map((recipe, index) => (
						<Col
							key={index}
							sm={12}
							md={6}
							lg={6}>
							<RecipeCard
								recipe={recipe}
								isSavedPage={true}
								setSavedRecipes={setSavedRecipes}
								isGrid={true}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default MyPage;
