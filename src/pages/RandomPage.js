import { Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectRandomBoardgame } from '../features/boardgames/gamesSlice';
import { Container } from 'reactstrap';
import Error from '../components/Error';
import Loading from '../components/Loading';

const RandomPage = () => {
    const randomGame = useSelector(selectRandomBoardgame);
    const isLoading = useSelector((state) => state.boardgames.isLoading);
    const errMsg = useSelector((state) => state.boardgames.errMsg);

    return isLoading ? (
        <Row>
            <Loading />
        </Row>
    ) : errMsg ? (
        <Row className='text-danger'>
            <Error errMsg={errMsg}/>
        </Row>
    ) : (
        <Container style={{ marginTop: '20px' }}>
            <h5>You should play...</h5>
            <h2 className='display-1'>{ randomGame.name }</h2>
        </Container>
    );

}

export default RandomPage;