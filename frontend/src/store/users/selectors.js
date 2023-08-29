export const getUsers = (state) => state.users

export const getUserById = (id) => (state) =>
  state.users.find((user) => user.id === id)
