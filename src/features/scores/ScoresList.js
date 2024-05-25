import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectScoresByBoardgameId } from './scoresSlice';
import { selectBoardgameById } from '../boardgames/gamesSlice';
import ScoreForm from './ScoreForm';
import ScoreTable from './ScoreTable';


const ScoresList = () => {
    let { gameId } = useParams();
    gameId = parseInt(gameId);

    const gameDetails = useSelector(selectBoardgameById(gameId));
    const gameScores = useSelector(selectScoresByBoardgameId(gameId));
    
    const { name, type, scoring } = gameDetails;

    if (gameId === null) {
        return (
            <div>
                <h5 style={{ textAlign: 'center', margin: '100px' }}>Pick a game</h5>
            </div>
        )
    }

    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Col className='text-center'>
                    <h2 className='text-center mt-3'>{name}</h2>
                    <ScoreForm 
                        gameId={gameId} 
                        gameType={type} 
                        scoringType={scoring}
                    /> 
                    {gameScores && gameScores.length > 0 ? (
                        gameScores.map((scores) => (
                            <ScoreTable 
                                key={scores.id} 
                                scores={scores}
                                gameType={scores.gameType}
                                scoringType={scores.scoringType}
                            />
                        ))
                    ) : (
                        <div>
                            <h5 style={{ textAlign: 'center', margin: '100px' }}>
                                There are no scores for this game.
                            </h5>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ScoresList;