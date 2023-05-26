import React, { useState } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ hideMyPageButton }) => {
	const navigate = useNavigate();
	const [showSearch, setShowSearch] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${searchQuery}`);
		setSearchQuery("");
		setShowSearch(false);
	};

	return (
		<Navbar
			bg='light'
			className='d-flex align-items-center gap-2 p-2 justify-content-space flex flex-column'>
			<Navbar.Brand href='/'>Home</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='w-100 justify-content-center'>
					<Form
						className='d-flex justify-content-center align-items-center gap-2'
						onSubmit={handleSearchSubmit}>
						<FormControl
							type='text'
							placeholder=' New search'
							className='mr-sm-2 ml-2 mb-2 mt-2 '
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							style={{ width: "auto" }}
						/>
						<Button
							className='ml-2'
							type='submit'>
							Sök
						</Button>
					</Form>
				</Nav>
			</Navbar.Collapse>
			{!hideMyPageButton && <Button href='/my-page'>My page</Button>}
		</Navbar>
	);
};

export default NavigationBar;
