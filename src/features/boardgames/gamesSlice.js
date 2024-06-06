// import { BOARDGAMES } from '../../app/shared/BOARDGAMES';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { mapImageURL } from '../../utils/mapImageURL';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const fetchBoardgames = createAsyncThunk(
    'boardgames/fetchBoardgames',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'boardgames')); // edit this line to get data from firestore
        const boardgames = [];
        querySnapshot.forEach((doc) => {
            boardgames.push(doc.data());
        })
        return boardgames;
    }
);

const initialState = {
    boardgamesArray: [],
    isLoading: true,
    errMsg: ''
}

const boardgamesSlice = createSlice({
    name: 'boardgames',
    initialState,
    reducers: {
        addBoardgame: (state, action) => {
            const newBoardgame = {
                id: state.boardgamesArray.length + 1,
                ...action.payload
            };
            state.boardgamesArray.push(newBoardgame);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBoardgames.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchBoardgames.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.boardgamesArray = mapImageURL(action.payload);
            })
            .addCase(fetchBoardgames.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
    }
});

// boardgamesReducer is a reducer function generated by the createSlice function. It combines the reducer logic defined in the reducers object and the initial state into a single reducer function.
export const boardgamesReducer = boardgamesSlice.reducer;

export const { addBoardgame } = boardgamesSlice.actions;

// These selector functions take the entire Redux state as an argument, represented by the (state) parameter. The selector function then accesses the relevant part of the state and returns the desired data.

export const selectAllBoardgames = (state) => {
    return state.boardgames.boardgamesArray;
}

export const selectBoardgameById = (id) => createSelector(
    (state) => state.boardgames.boardgamesArray,
    (boardgamesArray) => {
        return boardgamesArray.find((game) => game.id === parseInt(id));
    }
);

export const selectRandomBoardgame = createSelector(
    (state) => state.boardgames.boardgamesArray,
    (boardgamesArray) => {
        return boardgamesArray[ Math.floor(Math.random() * boardgamesArray.length) ];
    }
);