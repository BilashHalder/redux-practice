import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import creatorSlice from './features/creator/creatorSlice'
export const store= configureStore({
  reducer: {
    counter: counterReducer,
    creator:creatorSlice
  },
})