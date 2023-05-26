import React from "react";
import { Row } from "react-bootstrap";

const NutritionInfo = ({ recipe }) => {
	return (
		<div className='w-100'>
			<Row>
				<div className='col'>
					<strong>Energy:</strong>{" "}
					{parseFloat(recipe.totalNutrients?.ENERC_KCAL?.quantity).toFixed(2)}{" "}
					{recipe.totalNutrients?.ENERC_KCAL?.unit}
				</div>
				<div className='col'>
					<strong>Fat:</strong>{" "}
					{parseFloat(recipe.totalNutrients?.FAT?.quantity).toFixed(2)}{" "}
					{recipe.totalNutrients?.FAT?.unit}
				</div>
			</Row>
			<Row>
				<div className='col'>
					<strong>Carbs:</strong>{" "}
					{parseFloat(recipe.totalNutrients?.CHOCDF?.quantity).toFixed(2)}{" "}
					{recipe.totalNutrients?.CHOCDF?.unit}
				</div>
				<div className='col'>
					<strong>Protein:</strong>{" "}
					{parseFloat(recipe.totalNutrients?.PROCNT?.quantity).toFixed(2)}{" "}
					{recipe.totalNutrients?.PROCNT?.unit}
				</div>
			</Row>
		</div>
	);
};

export default NutritionInfo;
