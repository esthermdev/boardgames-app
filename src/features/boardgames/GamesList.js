import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GameCard from './GameCard';
import { selectAllBoardgames } from './gamesSlice';

const GamesList = () => {
    const boardgames = useSelector(selectAllBoardgames);
    const [categoryFilter, setCategoryFilter] = useState("All");

    let filteredGames;
    if (categoryFilter === "All") {
        filteredGames = boardgames;
    } else {
        filteredGames = boardgames.filter(game => game.category === categoryFilter)
    };

    return (
        <>
            <Container>
                <div className='d-flex justify-content-center m-4'>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("All")}>All</button>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Family")}>Family</button>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Strategy")}>Strategy</button>
                    <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Party")}>Party</button>
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