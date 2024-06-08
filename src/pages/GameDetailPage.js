import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectBoardgameById } from '../features/boardgames/gamesSlice';
import GameDetail from '../features/boardgames/GameDetail';
import { Container } from 'reactstrap';
import UpdateBoardgame from '../features/boardgames/UpdateBoardgame';

const GameDetailPage = () => {
    let { gameId } = useParams();
    
    const game = useSelector(selectBoardgameById(gameId));

    if (!game) {
        return <h2>Game Not Found</h2>
    }

    return (
        <Container style={{ marginTop: '20px', minHeight: '100vh' }}>
            <GameDetail game={game}/>
            <UpdateBoardgame game={game} />
        </Container>
    );
}

export default GameDetailPage;