import clsx from 'clsx'

import styles from './Button.module.css'

export const Button = ({ children, variant = '', className, ...rest }) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  )
}
