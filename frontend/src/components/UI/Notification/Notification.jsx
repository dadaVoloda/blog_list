import { useSelector } from 'react-redux'
import { getNotification } from '../../../store/notification/selectors'
import clsx from 'clsx'

import styles from './Notification.module.css'

export const Notification = () => {
  const notification = useSelector(getNotification)
  const { message, status } = notification

  if (!message) return null

  return <div className={clsx(styles.notice, styles[status])}>{message}</div>
}
