import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './redux/chatSlice';
import todoReducer from './redux/todoSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    todo: todoReducer,
  },
});
