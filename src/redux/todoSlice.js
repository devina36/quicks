import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodo = createAsyncThunk('todo/fetch', async () => {
  const res = await axios.get(BASE_URL);
  return res.data.slice(0, 3);
});

const initialState = {
  todo: [],
  status: 'idle',
  error: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: nanoid(),
        title: action.payload.title,
        date: action.payload.date,
        description: action.payload.desc,
        completed: action.payload.checked,
      };
      state.todo.push(newTodo);
    },
    editDateTodo: (state, action) => {
      const index = state.todo.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.todo[index].date = action.payload.date;
      }
      state.todo;
    },
    editDescTodo: (state, action) => {
      const index = state.todo.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.todo[index].description = action.payload.description;
      }
      state.todo;
    },
    editCheckedTodo: (state, action) => {
      const index = state.todo.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.todo[index].completed = action.payload.completed;
      }
      state.todo;
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const loadedPost = action.payload.map((item) => {
          item.date = '2023-01-27';
          item.description = '';
          return item;
        });

        state.todo = loadedPost;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTodo, editDateTodo, editDescTodo, editCheckedTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
