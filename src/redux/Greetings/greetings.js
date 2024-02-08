import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  greetingDetails: [],
  error: '',
};

const API_URL = 'http://127.0.0.1:3000/api/v1/greetings';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchingGreeting',
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
);

const greetingsReducer = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      greetingDetails: action.payload,
    }));
  },
});

export default greetingsReducer.reducer;
