import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import ScoresDropdown from '../features/scores/ScoresDropdown';
import { useSelector } from 'react-redux';
import { selectScoresByBoardgameId } from '../features/scores/scoresSlice';
import { selectAllBoardgames } from '../features/boardgames/gamesSlice';
import ScoresList from '../features/scores/ScoresList';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Scoreboards = () => {
    const [selectedGameId, setSelectedGameId] = useState(null);

    const gameScores = useSelector(selectScoresByBoardgameId(selectedGameId));
    const boardgames = useSelector(selectAllBoardgames);
    const isLoading = useSelector((state) => state.scores.isLoading);
    const errMsg = useSelector((state) => state.scores.errMsg);
    let content = null;
 
    const handleGameSelect = (gameId) => {
        setSelectedGameId(gameId);
    };

    const getGameNameByGameId = (gameId) => {
        const game = boardgames.find((game) => game.id === gameId);
        return game ? game.name : '';
    }

    if (isLoading) {
        content = (
            <Row>
                <Loading />
            </Row>
        );
    } else if (errMsg) {
        content = (
            <Row className='text-danger'>
                <Error errMsg={errMsg} />
            </Row>
        );
    } else {
        content = (
            <>
                <h5 className='my-3' >Choose a game to view your scores!</h5>
                <ScoresDropdown boardgames={boardgames} onGameSelect={handleGameSelect} />
                <ScoresList gameScores={gameScores} gameName={getGameNameByGameId(selectedGameId)} gameId={selectedGameId} />
            </>
        );
    }

    return (
        <Container style={{ marginTop: '20px' }}>
            <h1>Scoreboards</h1>
            {content}
        </Container>
    );
};

export default Scoreboards;