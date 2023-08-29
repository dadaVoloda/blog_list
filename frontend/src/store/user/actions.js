import blogService from '../../services/blogs'
import loginService from '../../services/login'
import { setNotification } from '../notification/actions'
import { setUser } from './userSlice'

const LOGGED_USER = 'loggedUser'

export const initializeUser = () => {
  return (dispatch) => {
    const loggedUserJSON = localStorage.getItem(LOGGED_USER)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }
}

export const loginUser = (userObject) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(userObject)

      localStorage.setItem(LOGGED_USER, JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch(setUser(user))
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

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem(LOGGED_USER)
    dispatch(setUser(null))
  }
}
