import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { parseISO, sub } from 'date-fns';

const BaseURL = 'https://jsonplaceholder.typicode.com';

export const fetchData = createAsyncThunk('list/fetch', async () => {
  const response = await axios.get(`${BaseURL}/posts`);
  const res = response.data.slice(0, 3);
  const datas = Promise.all(
    res.map(async (item) => {
      const chats = await axios.get(`${BaseURL}/comments?postId=${item.id}`);
      let min = 1;
      let hour = 1;
      item.chat = chats.data.map((a, i) => {
        a.date = sub(parseISO('2023-01-14T13:43:27.798Z'), { minutes: min - i, hours: hour - i }).toISOString();
        return a;
      });
      return item;
    })
  );
  return datas;
});

const initialState = {
  list: null,
  status: 'idle',
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;
