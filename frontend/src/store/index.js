import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blog/blogSlice'
import notificationReducer from './notification/notificationSlice'
import toggleReducer from './toggle/toggleSlice'
import userReducer from './user/userSlice'
import usersReducer from './users/usersSlice'

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notification: notificationReducer,
    toggle: toggleReducer,
    user: userReducer,
    users: usersReducer,
  },
})
