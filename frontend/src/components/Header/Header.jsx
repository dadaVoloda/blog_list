import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../store/user/actions'
import { getUser } from '../../store/user/selectors'
import { Button } from '../UI/Button/Button'

import styles from './Header.module.css'

export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/users"
          >
            Users
          </NavLink>
        </nav>
        {Boolean(user) && (
          <div>
            {user.name} logged in{' '}
            <Button type="button" onClick={() => dispatch(logoutUser())}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
