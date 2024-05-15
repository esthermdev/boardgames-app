import { Card, CardBody, CardTitle, Table } from 'reactstrap';

const ScoreTable = ({ scores }) => {

    const { date, playerScores } = scores;

    return (
            <Card className='m-3'>
                <CardBody>
                    <CardTitle tag='h6'>
                        {date}
                    </CardTitle>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Players</th>
                                <th>Scores</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playerScores.map((playerScore) => (
                                <tr key={playerScore.name}>
                                    <td>{playerScore.name}</td>
                                    <td>{playerScore.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
    );
};

export default ScoreTable;