import { Routes, Route } from 'react-router-dom';
import MyBoardgames from './pages/MyBoardgames';
import RandomPage from './pages/RandomPage'; 
import GameDetailPage from './pages/GameDetailPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Scoreboards from './pages/Scoreboards';
import './App.css';

	function App() {

		return (
			<div>
				<Header />
					<Routes>
						<Route path='/' element={ <HomePage /> }/>
						<Route path='/boardgames' element={ <MyBoardgames /> } />
						<Route path='/random' element={ <RandomPage /> } />
						<Route path='/scoreboards' element={ <Scoreboards /> } />
						<Route path='/games/:gameId' element={ <GameDetailPage /> } />
					</Routes>
			</div>
		);
	}

export default App;