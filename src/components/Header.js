import { useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../app/assets/img/logo.png';
import SearchBar from '../components/SearchBar';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} bg='dark' variant="dark" expand="lg" className="justify-content-between">
            <Container>
                <Navbar.Brand as={Link} to="/" className='my-1 d-flex align-items-center'>
                    <img 
                        alt='logo'
                        src={logo}
                        style={{
                            height: 50,
                            width: 50,
                            marginRight: 20,
                        }}
                    />
                    The Boardgame Shelf
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/random">Randomizer</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/boardgames">Boardgames</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/scores">Scoreboards</Nav.Link>
                    </Nav>
                    <SearchBar />
                    <UserLoginForm />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;