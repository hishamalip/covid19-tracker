import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Link to="/covid19-tracker/" className="navbar-brand">Covid-19 Tracker</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/covid19-tracker/">World</Link>
                        <Link className="nav-link" to="/covid19-tracker/india/">India</Link>
                        <Link className="nav-link" to="/covid19-tracker/kerala/">Kerala</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/hishamalip/covid19-tracker/">Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
