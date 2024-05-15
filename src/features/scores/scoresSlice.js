import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { SCORES } from '../../app/shared/SCORES';

const initialState = {
    scoresArray: SCORES
}

const scoresSlice = createSlice({
    name: 'scores',
    initialState,
    reducers: {
        addScore: (state, action) => {
            console.log('addScore action.payload', action.payload);
            console.log('addScore state.commentsArray:', state.scoresArray);
            const newScore = {
                id: state.scoresArray.length + 1,
                ...action.payload
            };
            state.scoresArray.push(newScore);
        }
    }
})

export const scoresReducer = scoresSlice.reducer;

export const { addScore } = scoresSlice.actions;

export const selectScoresByBoardgameId = (gameId) => createSelector(
    (state) => state.scores.scoresArray,
    (scoresArray) => {
        return scoresArray.filter((scores) => scores.gameId === parseInt(gameId))
    }
);