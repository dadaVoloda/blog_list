const dummy = (blogs) => {
  console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (!blogs.length) return null

  let favoriteBlogIndex = 0
  let maxLikes = 0

  blogs.forEach((blog, i) => {
    if (blog.likes > maxLikes) {
      favoriteBlogIndex = i
      maxLikes = blog.likes
    }
  })

  const { title, author, likes } = blogs[favoriteBlogIndex]
  return { title, author, likes }
}

const findMostByParam = (blogs, param = '') => {
  const dict = {}

  for (const blog of blogs) {
    if (!param) {
      dict[blog.author] = (dict[blog.author] || 0) + 1
    }
    if (param === 'likes') {
      dict[blog.author] = (dict[blog.author] || 0) + blog[param]
    }
  }

  let author = ''
  let max = 0

  for (const [name, count] of Object.entries(dict)) {
    if (count > max) {
      author = name
      max = count
    }
  }

  return { author, max }
}

const mostBlogs = (blogs) => {
  if (!blogs.length) return null

  const { author, max } = findMostByParam(blogs)

  return { author, blogs: max }
}

const mostLikes = (blogs) => {
  if (!blogs.length) return null

  const { author, max } = findMostByParam(blogs, 'likes')

  return { author, likes: max }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
