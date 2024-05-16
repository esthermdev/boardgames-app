// import { SCORES } from '../../app/shared/SCORES';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { baseUrl } from '../../app/shared/baseUrl.js';

export const fetchScores = createAsyncThunk(
    'scores/fetchScores',
    async () => {
        const response = await fetch(baseUrl + 'scores'); // edit this line to get data from firestore
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    scoresArray: [],
    isLoading: true,
    errMsg: ''
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchScores.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchScores.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.scoresArray = action.payload;
            })
            .addCase(fetchScores.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
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