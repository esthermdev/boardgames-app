import { useState } from 'react';
import { Container } from 'reactstrap';
import ScoresDropdown from '../features/scores/ScoresDropdown';
import { useSelector } from 'react-redux';
import { selectScoresByBoardgameId } from '../features/scores/scoresSlice';
import ScoresList from '../features/scores/ScoresList';
import { selectAllBoardgames } from '../features/boardgames/gamesSlice';

const Scoreboards = () => {
    const [selectedGameId, setSelectedGameId] = useState(null);

    const gameScores = useSelector(selectScoresByBoardgameId(selectedGameId));
    const boardgames = useSelector(selectAllBoardgames);

    const handleGameSelect = (gameId) => {
        setSelectedGameId(gameId);
    };

    const getGameNameByGameId = (gameId) => {
        const game = boardgames.find((game) => game.id === gameId);
        return game ? game.name : '';
    }

    return (
        <Container style={{ marginTop: '20px' }}>
            <h1>Scoreboards</h1>
            <h5 className='my-3' >Choose a game to view your scores!</h5>
            <ScoresDropdown boardgames={boardgames} onGameSelect={handleGameSelect} />
            <ScoresList gameScores={gameScores} gameName={getGameNameByGameId(selectedGameId)} gameId={selectedGameId} />
        </Container>
    );
};

export default Scoreboards;