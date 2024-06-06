import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GameCard from './GameCard';
import { selectAllBoardgames } from './gamesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import AddBoardgame from './AddBoardgame';

const GamesList = () => {
    const boardgames = useSelector(selectAllBoardgames);
    console.log("boardgames:", boardgames);

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
            <Container>
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("All")}>All</button>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Family")}>Family</button>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Strategy")}>Strategy</button>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Party")}>Party</button>
                </div>
                <AddBoardgame />
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