import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarHome = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/home">Strokers Bar & Billiards</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/specials">Specials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default NavbarHome;