import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  creator: "Bilash",
}

export const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {
    changeCreator: (state, action) => {
      state.creator = action.payload
    },
  },
})

export const { changeCreator} = creatorSlice.actions

export default creatorSlice.reducer