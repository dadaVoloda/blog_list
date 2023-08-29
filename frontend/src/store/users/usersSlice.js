import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, { payload }) {
      return payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
