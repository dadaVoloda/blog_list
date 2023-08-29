import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Togglable } from '../../components/Togglable/Togglable'
import { BlogForm } from '../../components/BlogForm/BlogForm'
import { getBlogs } from '../../store/blog/selectors'
import { BlogItem } from '../../components/BlogItem/BlogItem'
import { initializeBlogs } from '../../store/blog/actions'

import styles from './BlogsPage.module.css'

const BlogsPage = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(getBlogs)

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((prev, next) => next.likes - prev.likes)
  }, [blogs])

  return (
    <div>
      <Togglable className={styles.toggle} buttonLabel="Create new blog">
        <BlogForm />
      </Togglable>

      {sortedBlogs.map((blog) => (
        <BlogItem className={styles.blogItem} key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogsPage
