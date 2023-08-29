import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../../store/blog/actions'
import { Button } from '../UI/Button/Button'
import { beautifyDate } from '../../utils'
import { Input } from '../UI/Input/Input'

import styles from './BlogForm.module.css'

export const BlogForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createBlog({ title, author, url, date: beautifyDate(new Date()) }))
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div className={styles.blogForm}>
      <h2>Create new blog</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          name="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <Input
          label="Author"
          name="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <Input
          label="Url"
          name="url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <Button className={styles.createBtn} id="createBtn" type="submit">
          Create
        </Button>
      </form>
    </div>
  )
}
