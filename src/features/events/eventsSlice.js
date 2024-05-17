// import { EVENTS } from '../../app/shared/oldData/EVENTS.js';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { mapImageURL } from '../../utils/mapImageURL.js';

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'events')); // edit this line to get data from firestore
        const events = [];
        querySnapshot.forEach((doc) => {
            events.push(doc.data());
        })
        return events;
    }
);

const initialState = {
    eventsArray: [],
    isLoading: true,
    errMsg: ''
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.eventsArray = mapImageURL(action.payload);
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
    }
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