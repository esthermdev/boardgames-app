import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
    return (
        <Col xs="12" sm="6" md="4" lg="3" key={game.id} className="mb-4">
            <Card>
                <CardImg src={game.image} alt='Game card image' style={{ height: '200px', objectFit: 'cover' }}/>
                <CardBody>
                    <CardTitle tag='h5'>{game.name}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted'>{game.category}</CardSubtitle>
                    <Link to={`/games/${game.id}`}>Details</Link>
                </CardBody>
            </Card>
        </Col>
        
    );
}


export default GameCard;