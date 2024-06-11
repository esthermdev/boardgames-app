import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { 
    loginUser as loginUserAPI,
} from '../../services/usersAPI';


export const loginUser = createAsyncThunk(
    'user/loginUser', 
    async (credentials) => {
        const user = await loginUserAPI(credentials);
        return user;
    }
);

export const logoutUser = createAsyncThunk(
    'user/logoutUser', 
    async () => {
        return null;
    }
);

const initialState = {
    token: null,
    currentUser: null,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.token = null;
                state.currentUser = null;
            });
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectToken = (state) => state.user.token;
export const selectUserError = (state) => state.user.error;