import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { EVENTS } from '../../app/shared/EVENTS';

const initialState = {
    eventsArray: EVENTS
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    // reducers:
})

export const eventsReducer = eventsSlice.reducer;

export const selectAllEvents = (state) => {
    return state.events.eventsArray
}

export const selectEventsByFeatured = createSelector(
    (state) => state.events.eventsArray,
    (eventsArray) => {
        return eventsArray.filter((event) => event.featured === true)
    }
);