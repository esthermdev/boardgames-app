import { createSlice } from '@reduxjs/toolkit';
import { TRENDING } from '../../app/shared/TRENDING';

const initialState = {
    trendingArray: TRENDING
}

const trendingSlice = createSlice({
    name: 'trending',
    initialState
    // reducers: 
    
});

export const trendingReducer = trendingSlice.reducer;

export const selectAllTrendingGames = (state) => state.trending.trendingArray;