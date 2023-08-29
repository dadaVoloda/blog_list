import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBlogById } from '../store/blog/selectors'
import { Blog } from '../components/Blog/Blog'
import { Comments } from '../components/Comments/Comments'
import { useEffect } from 'react'
import { initializeBlogs } from '../store/blog/actions'

const BlogPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const blog = useSelector(getBlogById(id))

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  if (!blog) return null

  return (
    <div>
      <Blog blog={blog} />
      <Comments blog={blog} />
    </div>
  )
}

export default BlogPage
