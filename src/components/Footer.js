import React from 'react';
import { Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid className='p-4 mt-2 text-light text-center' style={{ backgroundColor: '#343a40' }}>
                <Row>
                    <p>&copy; {new Date().getFullYear()} Boardgame Shelf. All Rights Reserved.</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
