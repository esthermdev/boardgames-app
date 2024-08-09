// import { TRENDING } from '../../app/shared/TRENDING';
import { collection, getDocs } from 'firebase/firestore';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrending = createAsyncThunk(
    'trending/fetchTrending',
    async () => {
        const response = await axios.get('/api/trending');
        return response.data;
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