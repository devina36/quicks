import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
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

// export const fetchChat = createAsyncThunk('chat/fetch', async (postId, thunkAPI) => {
//   const res = await axios.get(`${BaseURL}/comments?postId=${postId}`);
//   let min = 1;
//   let hour = 1;
//   const chats = res.data.slice(0, 3).map((a, i) => {
//     a.date = sub(parseISO('2023-01-14T13:43:27.798Z'), { minutes: min - i, hours: hour - i }).toISOString();
//     return a;
//   });
//   return chats;
// });

const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload.postId);
      let bubble = {
        postId: action.payload.postId,
        id: nanoid(),
        name: 'Bixxy',
        email: 'bixxy@org.com',
        body: action.payload.body,
        date: new Date().toISOString(),
      };

      state.list[parseInt(index)].chat.push(bubble);
    },
  },
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
    // .addCase(fetchChat.fulfilled, (state, action) => {
    //   state.chat = action.payload;
    // });
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
