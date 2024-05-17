// import { TRENDING } from '../../app/shared/TRENDING';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrending = createAsyncThunk(
    'trending/fetchTrending',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'trending')); // edit this line to get data from firestore
        const trending = [];
        querySnapshot.forEach((doc) => {
            trending.push(doc.data());
        })
        return trending;
    }
);

const initialState = {
    trendingArray: [],
    isLoading: true,
    errMsg: ''
}

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrending.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTrending.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.trendingArray = action.payload;
            })
            .addCase(fetchTrending.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
    }
});

export const trendingReducer = trendingSlice.reducer;

export const selectAllTrendingGames = (state) => state.trending.trendingArray;