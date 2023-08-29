import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/user/actions'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Input/Input'

import styles from './LoginForm.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser({ username, password }))
    setUsername('')
    setPassword('')
  }

  return (
    <div className={styles.loginForm}>
      <h2>log in to application</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className={styles.btn} type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}
