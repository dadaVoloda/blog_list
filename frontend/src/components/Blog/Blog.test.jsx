import { test, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Blog } from './Blog'

import * as reduxHooks from 'react-redux'
import * as actions from '../../store/blog/actions'

vi.mock('react-redux')

const mockedUseSelector = vi.spyOn(reduxHooks, 'useSelector')
const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch')

mockedUseSelector.mockReturnValue({})

const testBlog = {
  title: 'Test title',
  author: 'Test author',
  url: 'url',
  likes: 5,
  user: { name: 'Test username' },
}

describe('<Blog />', () => {
  test('renders title and author by default', () => {
    const { container } = render(<Blog blog={testBlog} />)

    const div = container.querySelector('.blog')
    expect(div).toHaveTextContent('Test title')
    expect(div).toHaveTextContent('Test author')
  })

  test('double click calls the function twice', async () => {
    const dispatch = vi.fn()
    mockedDispatch.mockReturnValue(dispatch)
    const mockedUpdateBlog = vi.spyOn(actions, 'updateBlog')

    const { container } = render(<Blog blog={testBlog} />)
    const user = userEvent.setup()
    const likeBtn = container.querySelector('#like')
    await user.dblClick(likeBtn)

    expect(mockedUpdateBlog.mock.calls).toHaveLength(2)
  })
})
