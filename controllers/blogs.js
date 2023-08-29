const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const middleware = require('../utils/middleware')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

blogsRouter.post('/', middleware.userExtractor, async (request, response) => {
  const { title, author, url, date, likes = 0 } = request.body

  const user = request.user

  const blog = new Blog({ title, author, url, likes, date, user: user.id })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.status(201).json(savedBlog)
})

blogsRouter.put('/:id', middleware.userExtractor, async (request, response) => {
  const { id } = request.params

  const updatedBlog = await Blog.findByIdAndUpdate(id, request.body, {
    new: true,
    runValidators: true,
    context: 'query',
  })
  response.json(updatedBlog)
})

blogsRouter.delete(
  '/:id',
  middleware.userExtractor,
  async (request, response) => {
    const { id } = request.params
    const blog = await Blog.findById(id)

    if (blog.user.toString() !== request.user.id.toString()) {
      return response.status(401).json({ error: 'no access rights to content' })
    }

    await Blog.findByIdAndRemove(id)
    response.status(204).end()
  },
)

module.exports = blogsRouter
