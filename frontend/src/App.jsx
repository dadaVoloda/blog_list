import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Notification } from './components/UI/Notification/Notification'
import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { initializeUser } from './store/user/actions'
import { getUser } from './store/user/selectors'
import LoginPage from './pages/LoginPage'
import BlogsPage from './pages/BlogsPage/BlogsPage'
import BlogPage from './pages/BlogPage'
import UsersPage from './pages/UsersPage/UsersPage'
import UserPage from './pages/UserPage'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Notification />
        {!user ? (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/login" element={<Navigate replace to="/" />} />
          </Routes>
        )}
      </main>
    </div>
  )
}

export default App
