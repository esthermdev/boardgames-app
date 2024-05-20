import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectBoardgameById } from '../features/boardgames/gamesSlice';
import GameDetail from '../features/boardgames/GameDetail';
import { Container } from 'reactstrap';

const GameDetailPage = () => {
    let { gameId } = useParams();
    gameId = parseInt(gameId);
    
    const game = useSelector(selectBoardgameById(gameId));

    if (!game) {
        return <h2>Game Not Found</h2>
    }

    return (
        <Container style={{ marginTop: '20px' }}>
            <GameDetail game={game}/>
        </Container>
    );
}

export default GameDetailPage;