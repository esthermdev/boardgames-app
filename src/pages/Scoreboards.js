import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectAllBoardgames } from '../features/boardgames/gamesSlice';
import ScoresDropdown from '../features/scores/ScoresDropdown';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Scoreboards = () => {

    const boardgames = useSelector(selectAllBoardgames);
    
    const isLoading = useSelector((state) => state.scores.isLoading);
    const errMsg = useSelector((state) => state.scores.errMsg);
    let content = null;

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
                <h5 className='my-4 lead' >Choose a game to view your scores!</h5>
                <ScoresDropdown boardgames={boardgames}/>
            </>
        );
    }

    return (
        <Container style={{ marginTop: '20px', minHeight: '100vh' }}>
            <h1>Scoreboards</h1>
            {content}
        </Container>
    );
};

export default Scoreboards;