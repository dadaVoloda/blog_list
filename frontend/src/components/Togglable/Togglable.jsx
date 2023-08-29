import { useDispatch, useSelector } from 'react-redux'
import { setVisibility } from '../../store/toggle/toggleSlice'
import { Button } from '../UI/Button/Button'
import clsx from 'clsx'

import styles from './Togglable.module.css'

export const Togglable = ({ children, buttonLabel, className }) => {
  const dispatch = useDispatch()
  const { visible } = useSelector((state) => state.toggle)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    dispatch(setVisibility(!visible))
  }

  return (
    <div className={clsx(className)}>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{buttonLabel}</Button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {children}
        <Button
          className={styles.cancelBtn}
          variant="danger"
          onClick={toggleVisibility}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
