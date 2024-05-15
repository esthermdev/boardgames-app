import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScoreForm from './ScoreForm';
import ScoreTable from './ScoreTable';

const ScoresList = ({ gameScores, gameId, gameName }) => {

    if (gameId === null) {
        return (
            <div>
                <h5 style={{ textAlign: 'center', margin: '100px' }}>Pick a game</h5>
            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className='text-center mt-3'>{gameName}</h2>
                    <ScoreForm gameId={gameId} />
                    {gameScores && gameScores.length > 0 ? (
                        gameScores.map((scores) => (
                            <ScoreTable key={scores.date} scores={scores} />
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