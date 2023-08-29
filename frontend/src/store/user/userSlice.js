import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('loggedUser')) || null

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
