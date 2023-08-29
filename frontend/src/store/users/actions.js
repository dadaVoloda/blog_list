import usersService from '../../services/users'
import { setUsers } from './usersSlice'

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await usersService.getAll()
    dispatch(setUsers(users))
  }
}
