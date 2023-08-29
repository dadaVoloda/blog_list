import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBlog } from '../../store/blog/actions'
import { getUser } from '../../store/user/selectors'
import { Button } from '../UI/Button/Button'
import clsx from 'clsx'

import styles from './BlogItem.module.css'

export const BlogItem = ({ blog, className }) => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  const canRemove = blog.user.name === user.name

  const handleRemove = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      dispatch(deleteBlog(blog.id))
    }
  }

  return (
    <div className={clsx(styles.blogItem, className)}>
      <div className={styles.top}>
        <Link to={`/blogs/${blog.id}`}>
          <strong>{blog.author}</strong>
        </Link>
        <span className={styles.date}>{blog.date}</span>
        {canRemove && (
          <Button
            className={styles.removeBtn}
            variant="danger"
            type="button"
            onClick={handleRemove}
          >
            Remove
          </Button>
        )}
      </div>
      <Link className={styles.title} to={`/blogs/${blog.id}`}>
        {blog.title}
      </Link>
    </div>
  )
}
