// import { SCORES } from '../../app/shared/SCORES';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const fetchScores = createAsyncThunk(
    'scores/fetchScores',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'scores')); // edit this line to get data from firestore
        const scores = [];
        querySnapshot.forEach((doc) => {
            scores.push(doc.data());
        })
        return scores;
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
        return scoresArray.filter((scores) => scores.gameId === gameId)
    }
);