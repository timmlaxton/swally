import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">Swally</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/beers">Beers</Nav.Link>
							<Nav.Link href="/spirits">Spirits</Nav.Link>
							<Nav.Link href="/wines">Wines</Nav.Link>
							<Nav.Link href="/whiskey">Whiskey</Nav.Link>
						</Nav>
						<Nav className="ml-auto">
							<Nav.Link href="/cart">
								<i className="fas fa-shopping-bag"></i>
							</Nav.Link>
							<Nav.Link href="/login">Sign In</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
