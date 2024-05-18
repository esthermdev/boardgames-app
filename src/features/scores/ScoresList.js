import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScoreForm from './ScoreForm';
import ScoreTable from './ScoreTable';

const ScoresList = ({ gameScores, gameId, gameName, gameType, scoringType }) => {

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
                    <h2 className='text-center mt-3'>{gameName}</h2>
                    <ScoreForm 
                        gameId={gameId} 
                        gameType={gameType}
                        scoringType={scoringType}
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