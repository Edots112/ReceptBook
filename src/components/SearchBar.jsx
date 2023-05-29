import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import background from "../pizza.jpg";

const SearchBar = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/search/${query}`);
	};

	//TODO Make message if no saved recipes

	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Form
				onSubmit={handleSubmit}
				className='d-flex flex-column gap-3 justify-content-center align-items-center bg-light p-5 rounded shadow w-50 '
				style={{ minHeight: "30vh" }}>
				<Form.Group>
					<Form.Label htmlFor='query'>
						<h1>Search for Recipes</h1>
					</Form.Label>
					<Form.Control
						id='query'
						type='text'
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder='Search...'
						required
					/>
				</Form.Group>
				<Button
					variant='primary'
					type='submit'
					className='btn btn-primary btn-lg'>
					Search
				</Button>
			</Form>
			<Button
				className='fixed-bottom w-25 m-5 p-3 mx-auto d-block'
				href='/my-page'>
				My page
			</Button>
		</div>
	);
};

export default SearchBar;
