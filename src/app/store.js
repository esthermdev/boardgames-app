import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { boardgamesReducer } from '../features/boardgames/gamesSlice';
import { scoresReducer } from '../features/scores/scoresSlice';
import { trendingReducer } from '../features/trending/trendingSlice';
import { eventsReducer } from '../features/events/eventsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        boardgames: boardgamesReducer,
        scores: scoresReducer,
        trending: trendingReducer,
        events: eventsReducer,
        user: userReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
})