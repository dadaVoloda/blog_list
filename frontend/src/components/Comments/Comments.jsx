import { useDispatch } from 'react-redux'
import { updateBlog } from '../../store/blog/actions'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { Input } from '../UI/Input/Input'
import { Button } from '../UI/Button/Button'
import { beautifyDate } from '../../utils'

import styles from './Comments.module.css'

export const Comments = ({ blog }) => {
  const dispatch = useDispatch()
  const [commentValue, setCommentValue] = useState('')
  const { id, comments, user } = blog

  const handleSubmit = (e) => {
    e.preventDefault()

    if (commentValue.trim().length) {
      try {
        dispatch(
          updateBlog(id, {
            ...blog,
            user: user.id,
            comments: [
              {
                id: nanoid(),
                content: commentValue,
                date: beautifyDate(new Date()),
              },
              ...blog.comments,
            ],
          }),
        )
        setCommentValue('')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <Button>Add comment</Button>
      </form>
      {!!comments.length && (
        <ul className={styles.list}>
          {comments.map((comment) => (
            <li className={styles.comment} key={comment.id}>
              <div className={styles.commentTop}>
                <b>Аноним</b>
                <span>{comment.date}</span>
              </div>
              {comment.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
