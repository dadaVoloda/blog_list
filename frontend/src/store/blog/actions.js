import blogService from '../../services/blogs'
import { setNotification } from '../notification/actions'
import { setVisibility } from '../toggle/toggleSlice'
import { appendBlog, changeBlog, removeBlog, setBlogs } from './blogSlice'

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(content)
      dispatch(appendBlog(newBlog))
      dispatch(setVisibility(false))
      dispatch(
        setNotification({
          message: `a new blog ${newBlog.title} by ${newBlog.author}`,
          status: 'success',
        }),
      )
      dispatch(initializeBlogs())
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateBlog = (id, content) => {
  return async (dispatch) => {
    try {
      const updatedBlog = await blogService.update(id, content)
      dispatch(changeBlog({ id, updatedBlog }))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteBlog = (id) => {
  return async (dispatch) => {
    try {
      await blogService.remove(id)
      dispatch(removeBlog(id))
    } catch (error) {
      console.log(error)
      dispatch(
        setNotification({
          message: error.response.data.error,
          status: 'error',
        }),
      )
    }
  }
}
