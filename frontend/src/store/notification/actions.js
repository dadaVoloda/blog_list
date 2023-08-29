import { changeNotification } from './notificationSlice'

let timerId

export const setNotification = ({ message, status = '' }, time = 5) => {
  return (dispatch) => {
    clearTimeout(timerId)
    dispatch(changeNotification({ message, status }))
    timerId = setTimeout(() => {
      dispatch(changeNotification({ message: '', status: '' }))
    }, time * 1000)
  }
}
