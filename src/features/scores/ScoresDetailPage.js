import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectScoresByBoardgameId } from './scoresSlice';
import { selectBoardgameById } from '../boardgames/gamesSlice';
import ScoreForm from './ScoreForm';
import ScoreTable from './ScoreTable';
import Loading from '../../components/Loading';


const ScoresDetailPage = () => {
    let { gameId } = useParams();

    const gameDetails = useSelector(selectBoardgameById(gameId));
    const gameScores = useSelector(selectScoresByBoardgameId(gameId));

    if (!gameDetails) {
        return (
            <Loading />
        );
    };

    const { name, type, scoring } = gameDetails;

    return (
        <Container style={{ minHeight: '100vh' }}>
            <h1 className='text-center display-5 mt-3 pb-3 border-bottom'>{name}</h1>
            <div className='d-flex justify-content-center'>
                <Row>
                    <Col className='text-center'>
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
            </div>
            
        </Container>
    );
};

export default ScoresDetailPage;