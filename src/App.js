import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchBoardgames } from './features/boardgames/gamesSlice';
import { fetchScores } from './features/scores/scoresSlice';
import { fetchEvents } from './features/events/eventsSlice';
import MyBoardgames from './pages/MyBoardgames';
import RandomPage from './pages/RandomPage'; 
import GameDetailPage from './pages/GameDetailPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Scoreboards from './pages/Scoreboards';
import ScoresDetailPage from './features/scores/ScoresDetailPage';
import './App.css';
import { fetchTrending } from './features/trending/trendingSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBoardgames());
		dispatch(fetchScores());
		dispatch(fetchEvents());
		dispatch(fetchTrending());
	}, [dispatch]);

	return (
		<div>
			<Header />
				<Routes>
					<Route path='/' element={ <HomePage /> }/>
					<Route path='/boardgames' element={ <MyBoardgames /> } />
					<Route path='/boardgames/:gameId' element={ <GameDetailPage /> } />
					<Route path='/random' element={ <RandomPage /> } />
					<Route path='/scoreboards' element={ <Scoreboards /> } />
					<Route path='/scoreboards/:gameId' element={ <ScoresDetailPage /> } />
				</Routes>
		</div>
	);
}

export default App;