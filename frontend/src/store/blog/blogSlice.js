import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, { payload }) {
      return payload
    },
    appendBlog(state, { payload }) {
      state.push(payload)
    },
    changeBlog(state, { payload }) {
      const { id, updatedBlog } = payload
      return state.map((blog) => (blog.id !== id ? blog : updatedBlog))
    },
    removeBlog(state, { payload }) {
      return state.filter((blog) => blog.id !== payload)
    },
  },
})

export const { setBlogs, appendBlog, changeBlog, removeBlog } =
  blogSlice.actions

export default blogSlice.reducer
