import { Container } from 'reactstrap';
import GamesList from '../features/boardgames/GamesList';

const MyBoardgames = () => {

    return (
        <Container style={{ marginTop: '20px' }}>
            <h1>Boardgames</h1>
            <GamesList />
        </Container>
    );
}

export default MyBoardgames;