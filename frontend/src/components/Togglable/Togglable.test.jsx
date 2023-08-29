import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Togglable } from './Togglable'

import * as reduxHooks from 'react-redux'
import * as actions from '../../store/toggle/toggleSlice'

vi.mock('react-redux')

const mockedUseSelector = vi.spyOn(reduxHooks, 'useSelector')
const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch')

describe('<Togglable />', () => {
  let container

  beforeEach(() => {
    mockedUseSelector.mockReturnValue(false)
    const dispatch = vi.fn()
    mockedDispatch.mockReturnValue(dispatch)

    container = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv">togglable content</div>
      </Togglable>,
    ).container
  })

  test('renders its children', async () => {
    await screen.findAllByText('togglable content')
  })

  test('at start the children are not displayed', () => {
    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })

  test('can be opened and closed', async () => {
    const dispatch = vi.fn()
    mockedDispatch.mockReturnValue(dispatch)
    const mockedToggleVisibility = vi.spyOn(actions, 'setVisibility')

    const user = userEvent.setup()
    const button = screen.getByText('show...')
    await user.click(button)

    const closeButton = screen.getByText('Cancel')
    await user.click(closeButton)

    expect(mockedToggleVisibility).toHaveBeenCalledTimes(2)
  })
})
