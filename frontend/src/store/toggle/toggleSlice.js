import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { visible: false },
  reducers: {
    setVisibility(state, { payload }) {
      state.visible = payload
    },
  },
})

export const { setVisibility } = toggleSlice.actions

export default toggleSlice.reducer
