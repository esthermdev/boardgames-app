import { Container, Row, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GameCard from './GameCard';
import { selectAllBoardgames } from './gamesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import AddBoardgame from './AddBoardgame';
import RemoveBoardgame from './RemoveBoardgame';

const GamesList = () => {
    const boardgames = useSelector(selectAllBoardgames);

    const isLoading = useSelector((state) => state.boardgames.isLoading);
    const errMsg = useSelector((state) => state.boardgames.errMsg);

    const [categoryFilter, setCategoryFilter] = useState("All");

    let filteredGames;
    if (categoryFilter === "All") {
        filteredGames = boardgames;
    } else {
        filteredGames = boardgames.filter(game => game.category === categoryFilter)
    };

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    };

    if (errMsg) {
        return (
            <Row className='text-danger'>
                <Error errMsg={errMsg} />
            </Row>
        );
    };

    return (
        <>
            <Container className='text-center'>
                <Button className='m-2' color='primary' onClick={() => setCategoryFilter("All")}>All</Button>
                <Button className='m-2' color='primary' onClick={() => setCategoryFilter("Family")}>Family</Button>
                <Button className='m-2' color='primary' onClick={() => setCategoryFilter("Strategy")}>Strategy</Button>
                <Button className='m-2' color='primary' onClick={() => setCategoryFilter("Party")}>Party</Button>
                <div className='d-flex flex-row justify-content-center p-2'>
                    <AddBoardgame />
                    <RemoveBoardgame />
                </div>
                                  
            </Container>
            <Container>
                <Row>
                    { filteredGames.map( g => <GameCard key={g.id} game={g} /> ) }
                </Row>
            </Container>
        </> 
    );

}

export default GamesList;