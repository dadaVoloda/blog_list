import { createSlice } from '@reduxjs/toolkit'

const initialState = { message: '', status: '' }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification(state, { payload }) {
      return payload
    },
  },
})

export const { changeNotification } = notificationSlice.actions

export default notificationSlice.reducer
