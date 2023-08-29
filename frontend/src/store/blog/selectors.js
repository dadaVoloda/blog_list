export const getBlogs = (state) => state.blogs

export const getBlogById = (id) => (state) =>
  state.blogs.find((blog) => blog.id === id)
