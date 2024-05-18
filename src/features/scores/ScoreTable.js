import { Card, CardBody, CardTitle, Table } from 'reactstrap';

const ScoreTable = ({ scores, gameType, scoringType }) => {

    const { date, playerScores, teamScores } = scores;

    return (
            <Card className='m-5' style={{ width: '40rem' }}>
                <CardBody>
                    <CardTitle tag='h6' style={{ fontSize: '1.5rem' }}>
                        {date}
                    </CardTitle>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>{gameType === 'team' ? 'Teams' : 'Players'}</th>
                                <th>{scoringType === 'win-lose-draw' ? 'Result' : 'Scores'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameType === 'team' ? (
                                teamScores.map((teamScore) => (
                                    <tr key={teamScore.team}>
                                        <td>{teamScore.team}</td>
                                        <td>{scoringType === 'win-lose-draw' ? teamScore.result : teamScore.score}</td>
                                    </tr>
                                ))
                            ) : (
                                playerScores.map((playerScore) => (
                                    <tr key={playerScore.name}>
                                        <td>{playerScore.name}</td>
                                        <td>{scoringType === 'win-lose-draw' ? playerScore.result : playerScore.score}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
    );
};

export default ScoreTable;