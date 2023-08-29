import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../../store/users/selectors'
import { useEffect } from 'react'
import { initializeUsers } from '../../store/users/actions'

import styles from './UsersPage.module.css'

const UsersPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  return (
    <div>
      <h2>Users</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              <b>blogs</b>
            </th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link className={styles.link} to={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td className={styles.count}>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
