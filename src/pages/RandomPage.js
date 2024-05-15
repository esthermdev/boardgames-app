import { useSelector } from 'react-redux';
import { selectRandomBoardgame } from '../features/boardgames/gamesSlice';
import { Container } from 'reactstrap';

const RandomPage = () => {
    const randomGame = useSelector(selectRandomBoardgame);
    
    return (
        <Container style={{ marginTop: '20px' }}>
            <h5>You should play...</h5>
            <h2 className='display-1'>{ randomGame.name }</h2>
        </Container>
    );
}

export default RandomPage;