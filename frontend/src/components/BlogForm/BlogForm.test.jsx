import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogForm } from './BlogForm'

import * as reduxHooks from 'react-redux'
import * as actions from '../../store/blog/actions'

vi.mock('react-redux')

const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch')

test('<BlogForm /> updates parent state and calls onSubmit', async () => {
  const dispatch = vi.fn()
  mockedDispatch.mockReturnValue(dispatch)
  const mockedCreateBlog = vi.spyOn(actions, 'createBlog')

  const user = userEvent.setup()

  const { container } = render(<BlogForm />)

  const title = container.querySelector('input[name=title]')
  const author = container.querySelector('input[name=author]')
  const url = container.querySelector('input[name=url]')
  const createBtn = container.querySelector('#createBtn')

  await user.type(title, 'title text')
  await user.type(author, 'author text')
  await user.type(url, 'url text')

  await user.click(createBtn)

  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(mockedCreateBlog.mock.calls[0][0].title).toBe('title text')
  expect(mockedCreateBlog.mock.calls[0][0].author).toBe('author text')
  expect(mockedCreateBlog.mock.calls[0][0].url).toBe('url text')
})
