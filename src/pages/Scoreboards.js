import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectScoresByBoardgameId } from '../features/scores/scoresSlice';
import { selectAllBoardgames } from '../features/boardgames/gamesSlice';
import ScoresDropdown from '../features/scores/ScoresDropdown';
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

    const getGameDetailsByGameId = (gameId) => {
        const game = boardgames.find((game) => game.id === gameId);
        return game ? { name: game.name, type: game.type, scoring: game.scoring } : { name: '', type: '', scoring: '' };
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
        const gameDetails = getGameDetailsByGameId(selectedGameId);
        content = (
            <>
                <h5 className='my-4' >Choose a game to view your scores!</h5>
                <ScoresDropdown 
                    boardgames={boardgames} 
                    onGameSelect={handleGameSelect} 
                />
                <ScoresList 
                    gameScores={gameScores} 
                    gameName={gameDetails.name} 
                    gameId={selectedGameId} 
                    gameType={gameDetails.type}
                    scoringType={gameDetails.scoring}
                />
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