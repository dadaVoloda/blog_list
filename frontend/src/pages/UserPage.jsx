import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserById } from '../store/users/selectors'
import { useEffect } from 'react'
import { initializeUsers } from '../store/users/actions'

const UserPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector(getUserById(id))

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  if (!user) return null

  return (
    <div>
      <h2>{user.name}</h2>

      {user.blogs.length ? (
        <>
          <h3>Added blogs:</h3>
          <ul>
            {user.blogs.map((blog) => (
              <li key={blog.id}>{blog.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>Нет добавленных блогов</div>
      )}
    </div>
  )
}

export default UserPage
