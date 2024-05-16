// import { TRENDING } from '../../app/shared/TRENDING';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl.js';

export const fetchTrending = createAsyncThunk(
    'trending/fetchTrending',
    async () => {
        const response = await fetch(baseUrl + 'trending'); // edit this line to get data from firestore
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
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