import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../app/assets/logo.png';
import SearchBar from '../components/SearchBar';

const Header = () => {
    return (
        <Navbar bg='dark' variant="dark" expand="lg" className="justify-content-between">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/random">Randomizer</Nav.Link>
                        <Nav.Link as={Link} to="/boardgames">Boardgames</Nav.Link>
                        <Nav.Link as={Link} to="/scoreboards">Scoreboards</Nav.Link>
                    </Nav>
                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;