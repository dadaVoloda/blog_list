import { useDispatch } from 'react-redux'
import { updateBlog } from '../../store/blog/actions'
import { useRef } from 'react'
import { Button } from '../UI/Button/Button'

import styles from './Blog.module.css'

export const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const { title, author, date, url, likes, user, id } = blog
  const userName = useRef(user.name)

  const handleLike = () => {
    dispatch(
      updateBlog(id, {
        ...blog,
        likes: likes + 1,
        user: user.id,
      }),
    )
  }

  return (
    <div className="blog">
      <div>
        <div className={styles.top}>
          <strong>{author}</strong>
          <span className={styles.date}>{date}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>

        <a className={styles.url} href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        <div className={styles.bottom}>
          <div>
            Added by <b>{userName.current}</b>
          </div>
          <Button className={styles.btn} id="like" onClick={handleLike}>
            {likes} likes
          </Button>
        </div>
      </div>
    </div>
  )
}
