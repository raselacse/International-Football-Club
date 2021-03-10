import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <div className="sticky-top" style={{background: "#DD1515"}}>
                <Navbar className="container" expand="lg">
                    <Navbar.Brand className="text-light" as={Link} to="/home">
                        <i className="mr-2"><FontAwesomeIcon icon={faFutbol} />
                        </i><i>IFC</i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto text-light">
                            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/link">Contact</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/link">About</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default Header;